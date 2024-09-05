-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_boardId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "boardId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
