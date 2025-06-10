import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
const prisma = new PrismaClient();


async function main() {

  await prisma.buyOffer.deleteMany();
  await prisma.sellOffer.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  
  

  await prisma.product.create({
    data: {
      name: 'Malina',
      image: '/images/fruit/raspberry.svg',
      variants: {
        create: [
          { name: 'Griz' }, { name: '90/10' }, { name: 'Ekstra klasa' }, { name: 'Industrijska' }, { name: 'Sveža' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Kupina',
      image: '/images/fruit/blackberry.svg',
      variants: {
        create: [
          { name: 'Zamrznuta' }, { name: 'Ekstra klasa' }, { name: 'Industrijska' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Borovnica',
      image: '/images/fruit/blueberries.svg',
      variants: {
        create: [
          { name: 'Sveža' }, { name: 'Zamrznuta' }, { name: 'Organska' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Jagoda',
      image: '/images/fruit/strawberry.png',
      variants: {
        create: [
          { name: 'Sveža' }, { name: 'Zamrznuta' }, { name: 'Industrijska' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Šljiva',
      image: '/images/fruit/sljiva.png',
      variants: {
        create: [
          { name: 'Zamrznuta' }, { name: 'Suva' }, { name: 'Sveža' }, { name: 'Za rakiju' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Višnja',
      image: '/images/fruit/visnja.png',
      variants: {
        create: [
          { name: 'Sveža' }, { name: 'Zamrznuta' }, { name: 'Za preradu' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Trešnja',
      image: '/images/fruit/visnja.png',
      variants: {
        create: [
          { name: 'Sveža' }, { name: 'Zamrznuta' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Kajsija',
      image: '/images/fruit/peach.avif',
      variants: {
        create: [
          { name: 'Sveža' }, { name: 'Zamrznuta' }, { name: 'Za džem' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Breskva',
      image: '/images/fruit/peach.avif',
      variants: {
        create: [
          { name: 'Sveža' }, { name: 'Za preradu' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Jabuka',
      image: '/images/fruit/apple.avif',
      variants: {
        create: [
          { name: 'Crvena' }, { name: 'Zelena' }, { name: 'Industrijska' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Kruška',
      image: '/images/fruit/pear.png',
      variants: {
        create: [
          { name: 'Viljamovka' }, { name: 'Industrijska' }, { name: 'Sveža' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Grožđe',
      image: '/images/fruit/grozdje1.png',
      variants: {
        create: [
          { name: 'Stono' }, { name: 'Vinsko' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Aronija',
      image: '/images/fruit/aronia.png',
      variants: {
        create: [
          { name: 'Sveža' }, { name: 'Zamrznuta' }, { name: 'Sušena' }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: 'Ribizla',
      image: '/images/fruit/aronia.png',
      variants: {
        create: [
          { name: 'Crvena' }, { name: 'Crna' }, { name: 'Zamrznuta' }
        ]
      }
    }
  });

  console.log('Seed uspešno ubačen!');

  await insertExports2024(); // Učitavanje podataka za 2024
  await insertExports2025(); // Učitavanje podataka za 2025
}

async function insertExports2024() {
  const filePath = path.join(__dirname, 'transakcije_2024.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const transactions = JSON.parse(rawData);

  type ExportData = {
    date: Date;
    product: string;
    countryCode: string;
    countryName: string;
    quantityKg: number;
    valueEur: number;
    unitPriceEur: number;
    month: number;
    year: number;
    type: string;
  };

  const cleaned: ExportData[] = [];
  const skipped: any[] = [];

  transactions.forEach((item: any) => {
    const parsedDate = new Date(item.date);
    const isValidDate = !isNaN(parsedDate.getTime());

    if (
      !isValidDate ||
      !item.product ||
      !item.country ||
      !item.countryCode ||
      typeof item.quantity !== 'number' ||
      typeof item.cost !== 'number' ||
      typeof item.price !== 'number'
    ) {
      skipped.push(item);
      return;
    }

    cleaned.push({
      date: parsedDate,
      product: item.product,
      countryCode: item.countryCode,
      countryName: item.country,
      quantityKg: item.quantity,
      valueEur: item.cost,
      unitPriceEur: item.price,
      month: parsedDate.getMonth() + 1,
      year: parsedDate.getFullYear(),
      type: item.type?.toLowerCase() || 'ostalo'
    });
  });

  // Uklanjanje duplikata po ključnim poljima
  const uniqueMap = new Map<string, ExportData>();
  cleaned.forEach((entry) => {
    const key = `${entry.date.toISOString()}|${entry.product}|${entry.countryCode}|${entry.quantityKg}|${entry.valueEur}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, entry);
    }
  });
  const uniqueCleaned = Array.from(uniqueMap.values());

  await prisma.export.createMany({
    data: uniqueCleaned,
    skipDuplicates: true
  });

  console.log(`✅ Ubačeno ${uniqueCleaned.length} unikatnih export zapisa za 2024.`);
  if (skipped.length > 0) {
    console.warn(`⚠️ Preskočeno ${skipped.length} zapisa zbog neispravnih podataka.`);
  
    const skippedPath = path.join(__dirname, 'skipped_exports.json');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = skippedPath.replace('.json', `-backup-${timestamp}.json`);
  
    if (fs.existsSync(skippedPath)) {
      fs.copyFileSync(skippedPath, backupPath);
      console.log(`🗂️ Backup prethodnog skipped_exports.json kao ${backupPath}`);
    }
  
    fs.writeFileSync(skippedPath, JSON.stringify(skipped, null, 2));
  }
}

async function insertExports2025() {
  try {
    const filePath = path.join(__dirname, 'transakcijeRolend_2025.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const transactions = JSON.parse(rawData);

    type ExportData = {
      date: Date;
      product: string;
      countryCode: string;
      countryName: string;
      quantityKg: number;
      valueEur: number;
      unitPriceEur: number;
      month: number;
      year: number;
      type: string;
    };

    const cleaned: ExportData[] = [];
    const skipped: any[] = [];

    transactions.forEach((item: any) => {
      const parsedDate = new Date(item.date);
      const isValidDate = !isNaN(parsedDate.getTime());

      if (
        !isValidDate ||
        !item.product ||
        !item.country ||
        !item.countryCode ||
        typeof item.quantity !== 'number' ||
        typeof item.cost !== 'number' ||
        typeof item.price !== 'number'
      ) {
        skipped.push(item);
        return;
      }

      cleaned.push({
        date: parsedDate,
        product: item.product,
        countryCode: item.countryCode,
        countryName: item.country,
        quantityKg: item.quantity,
        valueEur: item.cost,
        unitPriceEur: item.price,
        month: parsedDate.getMonth() + 1,
        year: 2025,
        type: item.type?.toLowerCase() || 'rolend'
      });
    });

    // Uklanjanje duplikata po ključnim poljima
    const uniqueMap = new Map<string, ExportData>();
    cleaned.forEach((entry) => {
      const key = `${entry.date.toISOString()}|${entry.product}|${entry.countryCode}|${entry.quantityKg}|${entry.valueEur}`;
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, entry);
      }
    });
    const uniqueCleaned = Array.from(uniqueMap.values());

    await prisma.export.createMany({
      data: uniqueCleaned,
      skipDuplicates: true
    });

    console.log(`✅ Ubačeno ${uniqueCleaned.length} unikatnih export zapisa za 2025.`);
    if (skipped.length > 0) {
      console.warn(`⚠️ Preskočeno ${skipped.length} zapisa zbog neispravnih podataka.`);
    
      const skippedPath = path.join(__dirname, 'skipped_exports_2025.json');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = skippedPath.replace('.json', `-backup-${timestamp}.json`);
    
      if (fs.existsSync(skippedPath)) {
        fs.copyFileSync(skippedPath, backupPath);
        console.log(`🗂️ Backup prethodnog skipped_exports_2025.json kao ${backupPath}`);
      }
    
      fs.writeFileSync(skippedPath, JSON.stringify(skipped, null, 2));
    }
  } catch (error) {
    console.error('Error importing 2025 data:', error);
  }
}






main()

    .then(() => prisma.$disconnect())
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
