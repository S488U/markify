import Note from "@/src/model/Note";
import { NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";
import { getUser } from "@/src/lib/auth";

export async function GET(): Promise<NextResponse> {
  const user = await getUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 });
  }

  await connectDB();

  const notes = await Note.find({ userId: user.userId }).sort({
    createdAt: -1,
  });

  return NextResponse.json({ notes, success: true }, { status: 200 });
}
