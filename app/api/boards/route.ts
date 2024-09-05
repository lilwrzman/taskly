import { authOptions } from "@/app/lib/AuthOptions";
import {
  ItemCategory,
  ItemStatus,
  PrismaClient,
} from "@/prisma/generated/client";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export type BoardType = {
  id: number;
  title: string;
  projectId: number;
  color: string | null;
  createdAt: Date;
  updatedAt: Date;
  Item: {
    id: number;
    content: string;
    description: string | null;
    status: ItemStatus;
    start: Date | null;
    end: Date | null;
    createdAt: Date;
    updatedAt: Date;
    itemCategoryId: number | null;
    itemCategory: {
      id: number;
      category: string;
    } | null;
    userId: number | null;
    user: {
      id: number;
      name: string;
      image: string;
    } | null;
  }[];
};

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const reqUrl = req.url;
    const { searchParams } = new URL(reqUrl);
    const projectId = searchParams.get("projectId");

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!projectId) {
      return NextResponse.json({ error: "Board not found" }, { status: 404 });
    }

    const boards: BoardType[] = await prisma.board.findMany({
      where: {
        projectId: parseInt(projectId),
      },
      select: {
        id: true,
        title: true,
        projectId: true,
        color: true,
        createdAt: true,
        updatedAt: true,
        Item: {
          select: {
            id: true,
            content: true,
            description: true,
            status: true,
            start: true,
            end: true,
            createdAt: true,
            updatedAt: true,
            itemCategoryId: true,
            itemCategory: {
              select: {
                id: true,
                category: true,
              },
            },
            userId: true,
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ boards }, { status: 200 });
  } catch (e) {
    console.log(e);

    return NextResponse.json(
      { message: "Something went wrong!", error: e },
      { status: 500 }
    );
  }
}
