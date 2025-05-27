// /app/api/zip-validate/route.ts  (Next.js App Router style API route)

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { zip } = await req.json();

  const ZIP_API_URL = process.env.NEXT_PUBLIC_ZIP_API_URL;
  const ZIP_API_TOKEN = process.env.ZIP_API_TOKEN;

  const apiRes = await fetch(ZIP_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ZIP_API_TOKEN}`,
    },
    body: JSON.stringify({ zip }),
  });

  if (!apiRes.ok) {
    return NextResponse.json({ success: false, error: 'Failed to fetch ZIP data' }, { status: 500 });
  }

  const data = await apiRes.json();

  return NextResponse.json(data);
}
