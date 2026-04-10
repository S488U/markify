import { getUser } from "@/src/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUser();

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized", success: false },
      { status: 401 },
    );
  }

  return NextResponse.json(
    { message: "Welcome", success: true, user },
    { status: 200 },
  );
}
