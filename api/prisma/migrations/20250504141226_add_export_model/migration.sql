-- CreateTable
CREATE TABLE "Export" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "product" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "quantityKg" DOUBLE PRECISION NOT NULL,
    "valueEur" DOUBLE PRECISION NOT NULL,
    "unitPriceEur" DOUBLE PRECISION NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Export_pkey" PRIMARY KEY ("id")
);
