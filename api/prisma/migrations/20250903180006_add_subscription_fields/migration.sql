-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subscriptionEndDate" TIMESTAMP(3),
ADD COLUMN     "subscriptionStartDate" TIMESTAMP(3),
ADD COLUMN     "subscriptionStatus" TEXT NOT NULL DEFAULT 'trial',
ADD COLUMN     "trialEndDate" TIMESTAMP(3);
