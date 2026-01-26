import { NextResponse } from "next/server";
import { getTodayStats } from "@/lib/data";

export const GET = () => {
  return NextResponse.json(getTodayStats());
};
