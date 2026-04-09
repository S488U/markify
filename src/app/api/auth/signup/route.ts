import { connectDB } from "@/src/lib/db";
import User from "@/src/model/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

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
      { error: "User with mail id already exist" },
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
    { message: "User created succesfully" },
    { status: 200 },
  );
}
