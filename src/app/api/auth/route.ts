import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Test is working", success: true },
    { status: 200 },
  );
}
