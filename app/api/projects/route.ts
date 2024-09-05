import { authOptions } from "@/app/lib/AuthOptions";
import {
  PrismaClient,
  ProjectRole,
  ProjectScope,
} from "@/prisma/generated/client";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const prisma = new PrismaClient();

export type ProjectType = {
  id: number;
  userId: number;
  projectId: number;
  isFavorite: boolean;
  role: ProjectRole;
  createdAt: Date;
  updatedAt: Date;
  project: {
    id: number;
    title: string;
    description: string;
    authorId: number;
    projectScope: ProjectScope;
    createdAt: Date;
    updatedAt: Date;
  };
  user: {
    id: number;
    name: string;
    email: string;
    image: string;
  };
};

const projectSchema = z.object({
  title: z.string().min(1, "Harap isi judul proyek!"),
  description: z.string().min(1, "Harap isi deskripsi proyek!"),
  projectScope: z.string().min(1, "Harap pilih lingkup proyek!"),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { title, description, projectScope } = await req.json();

    const validationSchema = projectSchema.parse({
      title,
      description,
      projectScope,
    });

    if (!session) {
      return NextResponse.json(
        { message: "Unauthenticated!" },
        { status: 401 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title: title,
        description: description,
        authorId: parseInt(session.user.id),
        projectScope: projectScope,
      },
    });

    await prisma.myProject.create({
      data: {
        userId: parseInt(session.user.id),
        projectId: project.id,
        isFavorite: false,
        role: "LEADER",
      },
    });

    await prisma.board.create({
      data: {
        projectId: project.id,
        title: "Papan Tugas 1",
      }
    })

    return NextResponse.json(
      { message: "Proyek berhasil dibuat!" },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);

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

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthenticated!" },
        { status: 401 }
      );
    }

    const result: ProjectType[] = await prisma.myProject.findMany({
      select: {
        id: true,
        userId: true,
        projectId: true,
        isFavorite: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        project: {
          select: {
            id: true,
            title: true,
            description: true,
            authorId: true,
            projectScope: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
      where: {
        userId: parseInt(session.user.id),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { message: "Something went wrong!", error: e },
      { status: 500 }
    );
  }
}
