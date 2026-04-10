import { connectDB } from "@/src/lib/db";
import User from "@/src/model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type loginInput = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();

    const { email, password }: loginInput = await req.json();

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return NextResponse.json(
        { message: "User Not found", success: false },
        { status: 404 },
      );
    }

    const isMatchUser = await bcrypt.compare(password, user.password as string);

    if (!isMatchUser) {
      return NextResponse.json(
        { message: "Email or Password is Wrong", success: false },
        { status: 401 },
      );
    }

    const TOKEN = process.env.JWT_TOKEN;

    if (!TOKEN) {
      throw new Error("JWT_TOKEN is not defined");
    }

    const jwtToken = jwt.sign({ userId: user._id }, TOKEN, { expiresIn: "7d" });

    const cookieStore = await cookies();

    cookieStore.set("token", jwtToken, {
      httpOnly: true,
    });

    return NextResponse.json(
      { message: "User Logged In", success: true },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}
