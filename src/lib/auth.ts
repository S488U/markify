import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

type UserPayload = {
  userId: string;
};

export async function getUser() {
  const storedCookies = await cookies();
  const token = storedCookies.get("token")?.value;

  if (!token) return null;

  const TOKEN = process.env.JWT_TOKEN;
  if (!TOKEN) {
    throw new Error("Please define the JWT_TOKEN environment variable");
  }

  try {
    return jwt.verify(token, TOKEN) as UserPayload;
  } catch {
    return null;
  }
}
