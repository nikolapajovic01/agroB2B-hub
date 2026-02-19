import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const filePath = path.join(__dirname, 'exports_2025_nov_dec.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const transactions = JSON.parse(rawData);

  const cleaned: any[] = [];
  const skipped: any[] = [];

  for (const item of transactions) {
    const parsedDate = new Date(item.date);
    const isValidDate = !isNaN(parsedDate.getTime());

    if (
      !isValidDate ||
      !item.product ||
      !item.country ||
      !item.countryCode ||
      typeof item.quantity !== 'number' ||
      typeof item.cost !== 'number'
    ) {
      skipped.push(item);
      continue;
    }

    cleaned.push({
      date: parsedDate,
      product: item.product,
      countryCode: item.countryCode,
      countryName: item.country,
      quantityKg: item.quantity,
      valueEur: item.cost,
      unitPriceEur: item.price === '' || item.price === 'N/A' ? null : item.price,
      month: parsedDate.getMonth() + 1,
      year: parsedDate.getFullYear(),
      type: item.type?.toLowerCase() || 'ostalo'
    });
  }

  await prisma.export.createMany({
    data: cleaned,
    skipDuplicates: true
  });

  console.log(`✅ Ubačeno ${cleaned.length} zapisa za novembar-decembar 2025.`);
  if (skipped.length > 0) {
    console.warn(`⚠️ Preskočeno ${skipped.length} zapisa zbog neispravnih podataka.`);
    if (skipped.length < 20) {
      console.log('Preskočeni zapisi:', skipped);
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
