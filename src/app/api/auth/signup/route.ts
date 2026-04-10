import { connectDB } from "@/src/lib/db";
import User from "@/src/model/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { MessageChannel } from "worker_threads";

type signUpInput = {
  username: string;
  email: string;
  password: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { username, email, password }: signUpInput = await req.json();

  await connectDB();

  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json(
      { message: "User with mail id already exist", success: false },
      { status: 409 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return NextResponse.json(
    { message: "User created succesfully", success: true },
    { status: 200 },
  );
}
