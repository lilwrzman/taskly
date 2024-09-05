-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_itemCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_userId_fkey";

-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "color" TEXT;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "description" TEXT,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "itemCategoryId" DROP NOT NULL,
ALTER COLUMN "end" DROP NOT NULL,
ALTER COLUMN "start" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ItemCategory" ADD COLUMN     "color" TEXT;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemCategoryId_fkey" FOREIGN KEY ("itemCategoryId") REFERENCES "ItemCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
