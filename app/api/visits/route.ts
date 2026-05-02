import { NextResponse } from "next/server";

const KEY = "portfolio_visits";
const COUNTAPI_NAMESPACE = process.env.COUNTAPI_NAMESPACE ?? "david-condori-portfolio";

// ── In-memory fallback (used only in local dev or when external store is unavailable) ───
// In serverless environments, this resets on cold start / suspension.
declare global {
  // eslint-disable-next-line no-var
  var _visitCount: number | undefined;
}
if (global._visitCount === undefined) global._visitCount = 0;

function isUpstashConfigured() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function redis(cmd: (string | number)[]): Promise<number | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });

  const data = await res.json();
  return data?.result != null ? Number(data.result) : null;
}

async function countapiGet(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.countapi.xyz/get/${COUNTAPI_NAMESPACE}/${KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

async function countapiHit(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.countapi.xyz/hit/${COUNTAPI_NAMESPACE}/${KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

// ── Routes ────────────────────────────────────────────────────────────────────
export async function GET() {
  try {
    if (isUpstashConfigured()) {
      const result = await redis(["GET", KEY]);
      if (result !== null) return NextResponse.json({ count: result });
    }

    const countapiResult = await countapiGet();
    if (countapiResult !== null) return NextResponse.json({ count: countapiResult });

    return NextResponse.json({ count: global._visitCount ?? 0 });
  } catch {
    return NextResponse.json({ count: global._visitCount ?? 0 });
  }
}

export async function POST() {
  try {
    if (isUpstashConfigured()) {
      const result = await redis(["INCR", KEY]);
      if (result !== null) return NextResponse.json({ count: result });
    }

    const countapiResult = await countapiHit();
    if (countapiResult !== null) return NextResponse.json({ count: countapiResult });

    global._visitCount = (global._visitCount ?? 0) + 1;
    return NextResponse.json({ count: global._visitCount });
  } catch {
    global._visitCount = (global._visitCount ?? 0) + 1;
    return NextResponse.json({ count: global._visitCount });
  }
}
