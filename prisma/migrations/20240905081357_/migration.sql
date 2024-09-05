/*
  Warnings:

  - You are about to drop the `FavoriteProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectMember` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProjectRole" AS ENUM ('LEADER', 'MEMBER', 'GUEST');

-- CreateEnum
CREATE TYPE "ProjectScope" AS ENUM ('PUBLIC', 'PRIVATE');

-- DropForeignKey
ALTER TABLE "FavoriteProject" DROP CONSTRAINT "FavoriteProject_projectId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteProject" DROP CONSTRAINT "FavoriteProject_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_userId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectScope" "ProjectScope" NOT NULL DEFAULT 'PRIVATE';

-- DropTable
DROP TABLE "FavoriteProject";

-- DropTable
DROP TABLE "ProjectMember";

-- DropEnum
DROP TYPE "MemberRole";

-- CreateTable
CREATE TABLE "MyProject" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "role" "ProjectRole" NOT NULL DEFAULT 'LEADER',
    "isFavorite" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MyProject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MyProject" ADD CONSTRAINT "MyProject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyProject" ADD CONSTRAINT "MyProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
