import { connectDB } from "@/src/lib/db";
import Note from "@/src/model/Note";
import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/src/lib/auth";

type NoteInput = {
  title: string;
  content: string;
};

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  const user = await getUser();

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized", success: false },
      { status: 401 },
    );
  }

  const { title, content }: NoteInput = await req.json();
  const { id: noteId } = await params;

  await connectDB();

  const note = await Note.findById(noteId);

  if (!note || note.userId.toString() !== user.userId) {
    return NextResponse.json(
      { message: "Not found", success: false },
      { status: 404 },
    );
  }

  note.title = title;
  note.content = content;

  await note.save();

  return NextResponse.json({ note, success: true }, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  const user = await getUser();

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized", success: false },
      { status: 401 },
    );
  }

  await connectDB();

  const { id: noteId } = await params;

  await Note.findOneAndDelete({
    _id: noteId,
    userId: user.userId,
  });

  return NextResponse.json(
    { message: "Deleted", success: true },
    { status: 200 },
  );
}
