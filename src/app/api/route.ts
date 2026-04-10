import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { message: "API is UP", success: true },
    { status: 200 },
  );
}
