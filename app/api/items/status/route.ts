import { authOptions } from "@/app/lib/AuthOptions";
import { PrismaClient } from "@/prisma/generated/client";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextResponse) {
  try {
    const session = await getServerSession(authOptions);
    const { itemId, status } = await req.json();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.item.update({
      where: {
        id: itemId,
      },
      data: {
        status: status,
      },
    });

    return NextResponse.json(
      { message: "Status tugas berhasil diubah!" },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { message: "Something went wrong!", error: e },
      { status: 500 }
    );
  }
}
