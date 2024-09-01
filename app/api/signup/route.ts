"use server";

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from "bcryptjs";
import z from "zod";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const validationSchema = z.object({
      name: z.string().min(1, "Fullname is required!"),
      email: z.string().min(1, "Email is required!"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long!")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/,
          "Password must contain at least one lowercase letter, one uppercase letter, and one number"
        ),
    });

    validationSchema.parse({ name, email, password });

    const hashedPassword: string = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name: name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Registered successfully!" },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);

    if (e instanceof z.ZodError) {
      const errors = e.errors.reduce((acc, curr) => {
        if (curr.path.length > 0) {
          acc[curr.path[0]] = curr.message;
        }
        return acc;
      }, {} as Record<string, string>);

      return NextResponse.json({ errors }, { status: 400 });
    }

    if (e instanceof Prisma.PrismaClientUnknownRequestError) {
      if (e.message === "Unique constraint failed on the {constraint}") {
        return NextResponse.json(
          { errors: { username: "Email already been taken." } },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { message: "Something went wrong!", error: e },
      { status: 500 }
    );
  }
}
