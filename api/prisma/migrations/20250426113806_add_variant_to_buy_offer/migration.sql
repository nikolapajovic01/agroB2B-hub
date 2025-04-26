-- First, add the variantId column as nullable
ALTER TABLE "BuyOffer" ADD COLUMN "variantId" INTEGER;

-- Add the foreign key constraint
ALTER TABLE "BuyOffer" ADD CONSTRAINT "BuyOffer_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Update existing records with a default variant (you'll need to replace 1 with an actual variant ID)
UPDATE "BuyOffer" SET "variantId" = 1 WHERE "variantId" IS NULL;

-- Make the column required
ALTER TABLE "BuyOffer" ALTER COLUMN "variantId" SET NOT NULL; 