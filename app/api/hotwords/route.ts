import { NextResponse } from "next/server";
import { addHotword, getHotwords } from "@/lib/data";

export const GET = () => {
  return NextResponse.json({ hotwords: getHotwords() });
};

export const POST = async (request: Request) => {
  const body = await request.json().catch(() => null);
  const word = typeof body?.word === "string" ? body.word.trim() : "";
  if (!word) {
    return NextResponse.json({ error: "Word is required" }, { status: 400 });
  }
  const hotwords = addHotword(word);
  return NextResponse.json({ hotwords }, { status: 201 });
};
