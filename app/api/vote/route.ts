import { NextResponse } from "next/server";
import { castVote, type VoteFeeling } from "@/lib/data";

const isFeeling = (value: string): value is VoteFeeling => {
  return value === "low" || value === "medium" || value === "high";
};

export const POST = async (request: Request) => {
  const body = await request.json().catch(() => null);
  const feeling = typeof body?.feeling === "string" ? body.feeling : "";
  if (!isFeeling(feeling)) {
    return NextResponse.json({ error: "Invalid feeling" }, { status: 400 });
  }
  const stats = castVote(feeling);
  return NextResponse.json(stats, { status: 201 });
};
