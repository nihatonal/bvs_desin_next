import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://www.bravixcreative.com"; // kendi domain adresin

  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
