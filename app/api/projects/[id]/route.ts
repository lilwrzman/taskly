import { authOptions } from "@/app/lib/AuthOptions";
import { PrismaClient } from "@/prisma/generated/client";
import { error } from "console";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Project not found!" },
        { status: 404 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(id)
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json({ project }, { status: 200 });
  } catch (e) {
    console.log(e);

    return NextResponse.json(
      { message: "Something went wrong!", error: e },
      { status: 500 }
    );
  }
}
