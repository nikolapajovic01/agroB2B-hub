-- DropForeignKey
ALTER TABLE "SellOffer" DROP CONSTRAINT "SellOffer_companyId_fkey";

-- AlterTable
ALTER TABLE "SellOffer" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "companyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SellOffer" ADD CONSTRAINT "SellOffer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellOffer" ADD CONSTRAINT "SellOffer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
