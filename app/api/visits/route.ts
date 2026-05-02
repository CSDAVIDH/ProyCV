import { NextResponse } from "next/server";

const KEY = "portfolio_visits";

// ── In-memory fallback (used when Upstash is not configured) ──────────────────
// Resets on server restart. Configure Upstash for persistence in production.
declare global {
  // eslint-disable-next-line no-var
  var _visitCount: number | undefined;
}
if (global._visitCount === undefined) global._visitCount = 0;

// ── Upstash Redis ─────────────────────────────────────────────────────────────
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
  return data.result != null ? Number(data.result) : null;
}

// ── Routes ────────────────────────────────────────────────────────────────────
export async function GET() {
  try {
    const result = await redis(["GET", KEY]);
    if (result !== null) return NextResponse.json({ count: result });
    return NextResponse.json({ count: global._visitCount ?? 0 });
  } catch {
    return NextResponse.json({ count: global._visitCount ?? 0 });
  }
}

export async function POST() {
  try {
    const result = await redis(["INCR", KEY]);
    if (result !== null) return NextResponse.json({ count: result });
    global._visitCount = (global._visitCount ?? 0) + 1;
    return NextResponse.json({ count: global._visitCount });
  } catch {
    global._visitCount = (global._visitCount ?? 0) + 1;
    return NextResponse.json({ count: global._visitCount });
  }
}
