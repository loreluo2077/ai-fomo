import { NextResponse } from "next/server";
import { addAgree } from "@/lib/data";

export const POST = async (request: Request) => {
  const body = await request.json().catch(() => null);
  const fragmentId = typeof body?.fragmentId === "string" ? body.fragmentId : "";

  if (!fragmentId) {
    return NextResponse.json({ error: "fragmentId is required" }, { status: 400 });
  }

  const fragment = addAgree(fragmentId);
  if (!fragment) {
    return NextResponse.json({ error: "Fragment not found" }, { status: 404 });
  }

  return NextResponse.json({ fragment }, { status: 201 });
};
