import { authOptions } from "@/app/lib/AuthOptions";
import { PrismaClient } from "@/prisma/generated/client";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const prisma = new PrismaClient();

const createSchema = z.object({
  content: z.string().min(1, "Harap masukkan judul tugas!"),
  boardId: z.number().min(1, "Harap tentukan papan tugas!"),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { content, boardId } = await req.json();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const validationSchema = createSchema.parse({ content, boardId });

    await prisma.item.create({
      data: {
        content,
        boardId,
      },
    });

    return NextResponse.json(
      { message: "Berhasil menambahkan tugas!" },
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

    return NextResponse.json(
      { message: "Something went wrong!", errors: e },
      { status: 500 }
    );
  }
}
