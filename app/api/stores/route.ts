import { NextResponse } from "next/server";

export async function Post(req: Request) {
  try {
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
