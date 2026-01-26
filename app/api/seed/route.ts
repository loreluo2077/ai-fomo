import { NextResponse } from "next/server";

import { seedSignals } from "@/seed/signals";

export async function GET() {
  return NextResponse.json({ seeded: seedSignals.length, signals: seedSignals });
}
