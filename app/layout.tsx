import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Condori | Engenheiro de Sistemas",
  description:
    "Portfólio profissional de David Hilarion Condori Sullcani — Engenheiro de Sistemas especializado em desenvolvimento backend, suporte técnico e infraestrutura de TI.",
  keywords: [
    "David Condori",
    "Engenheiro de Sistemas",
    "Backend Developer",
    "Ruby on Rails",
    "Next.js",
    "Portfólio",
  ],
  authors: [{ name: "David Hilarion Condori Sullcani" }],
  openGraph: {
    title: "David Condori | Engenheiro de Sistemas",
    description: "Portfólio profissional — Engenheiro de Sistemas & Backend Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-dark-900 text-slate-200 antialiased">{children}</body>
    </html>
  );
}
