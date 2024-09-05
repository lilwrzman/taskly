/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Board` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_ownerId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "ownerId",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
