import { authOptions } from "@/app/lib/AuthOptions";
import { PrismaClient } from "@/prisma/generated/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { projectId } = await req.json();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthenticated!" },
        { status: 500 }
      );
    }

    const myProject = await prisma.myProject.findFirst({
      where: {
        projectId: projectId,
        userId: parseInt(session.user.id),
      },
    });

    if (!myProject) {
      return NextResponse.json(
        { message: "Proyek tidak ditemukan!" },
        { status: 404 }
      );
    }

    await prisma.myProject.update({
      where: {
        id: myProject.id,
      },
      data: {
        isFavorite: !myProject.isFavorite,
      },
    });

    return NextResponse.json(
      { message: "Toggle Favorite berhasil!" },
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
