import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const storedCookies = await cookies();
  storedCookies.delete("token");

  return NextResponse.json({ message: "User Logged Out" }, { status: 200 });
}
