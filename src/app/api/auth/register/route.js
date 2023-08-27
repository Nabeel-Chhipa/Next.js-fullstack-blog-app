import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  await connect();

  const hashedPassword = await bcrypt.hash(password, 6);
  const newUser = await User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
