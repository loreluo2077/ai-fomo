import { NextResponse } from "next/server";
import { addFragment, getFragments } from "@/lib/data";

export const GET = () => {
  return NextResponse.json({ fragments: getFragments() });
};

export const POST = async (request: Request) => {
  const body = await request.json().catch(() => null);
  const text = typeof body?.text === "string" ? body.text.trim() : "";
  const author = typeof body?.author === "string" ? body.author.trim() : "Anonymous";

  if (!text) {
    return NextResponse.json({ error: "Text is required" }, { status: 400 });
  }

  const fragment = addFragment(text, author || "Anonymous");
  return NextResponse.json({ fragment }, { status: 201 });
};
