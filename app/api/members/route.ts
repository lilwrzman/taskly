import { authOptions } from "@/app/lib/AuthOptions";
import { PrismaClient, ProjectRole } from "@/prisma/generated/client";
import { error } from "console";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export type ProjectMemberType = {
  id: number;
  userId: number;
  projectId: number;
  role: ProjectRole;
  user: {
    id: number;
    name: string;
    image: string;
  };
};

export async function GET(req: NextRequest) {
  try {
    const reqUrl = req.url;
    const { searchParams } = new URL(reqUrl);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID not found" },
        { status: 404 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const projectMembers = await prisma.myProject.findMany({
      where: {
        projectId: parseInt(projectId),
      },
      select: {
        id: true,
        userId: true,
        projectId: true,
        role: true,
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json({ members: projectMembers }, { status: 200 });
  } catch (e) {
    console.log(e);

    return NextResponse.json(
      { message: "Something went wrong!", error: e },
      { status: 500 }
    );
  }
}
