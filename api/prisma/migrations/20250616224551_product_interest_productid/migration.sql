/*
  Warnings:

  - You are about to drop the column `product` on the `ProductInterest` table. All the data in the column will be lost.
  - Added the required column `productId` to the `ProductInterest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductInterest" DROP COLUMN "product",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductInterest" ADD CONSTRAINT "ProductInterest_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
