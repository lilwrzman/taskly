import { authOptions } from "@/app/lib/AuthOptions";
import { PrismaClient } from "@/prisma/generated/client";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { userId, itemId } = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    await prisma.item.update({
      where: {
        id: itemId,
      },
      data: {
        userId: userId,
      },
    });

    return NextResponse.json(
      { message: "User berhasil ditugaskan!" },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);

    return NextResponse.json(
      { message: "Something went wrong!", error: e },
      { status: 500 }
    );
  }
}
