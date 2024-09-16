import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Check if the user already exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return NextResponse.json({
        success: false,
        message: "User already exists.",
      });
    }

    // You can handle user creation here (commented out to test for now)
    // const newUser = await prisma.user.create({
    //   data: { email, password }
    // });

    return NextResponse.json({
      success: true,
      message: "User registration successful.",
    });
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong during registration.",
    });
  }
}
