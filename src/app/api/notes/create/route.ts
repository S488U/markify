import Note from "@/src/model/Note";
import { getUser } from "@/src/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";

type NoteInput = {
  title: string;
  content: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const user = await getUser();

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized", success: false },
      { status: 401 },
    );
  }

  const { title, content }: NoteInput = await req.json();

  await connectDB();

  const note = await Note.create({
    userId: user.userId,
    title,
    content,
  });

  return NextResponse.json({ note, success: true }, { status: 201 });
}
