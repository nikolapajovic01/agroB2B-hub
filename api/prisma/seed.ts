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

async function cleanupDuplicateExports2025() {
  try {
    console.log('🧹 Čišćenje dupliranih zapisa za 2025...');
    
    // Dohvatamo sve zapise za 2025
    const exports = await prisma.export.findMany({
      where: {
        year: 2025
      },
      orderBy: {
        id: 'asc'
      }
    });

    // Kreiramo backup pre čišćenja
    const backupPath = path.join(__dirname, 'exports_2025_backup.json');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const timestampedBackupPath = backupPath.replace('.json', `-${timestamp}.json`);
    
    fs.writeFileSync(timestampedBackupPath, JSON.stringify(exports, null, 2));
    console.log(`💾 Napravljen backup podataka u ${timestampedBackupPath}`);

    // Kreiramo mapu za praćenje jedinstvenih zapisa
    const uniqueMap = new Map<string, number>();
    const duplicates: number[] = [];
    const uniqueRecords: any[] = [];

    exports.forEach(record => {
      const key = `${record.date.toISOString()}|${record.product}|${record.countryCode}|${record.quantityKg}|${record.valueEur}`;
      
      if (uniqueMap.has(key)) {
        // Ako zapis već postoji, označavamo ga kao duplikat
        duplicates.push(record.id);
      } else {
        // Ako je novi zapis, dodajemo ga u mapu i niz jedinstvenih zapisa
        uniqueMap.set(key, record.id);
        uniqueRecords.push(record);
      }
    });

    if (duplicates.length > 0) {
      // Prvo čuvamo jedinstvene zapise u privremeni fajl
      const uniqueRecordsPath = path.join(__dirname, 'unique_exports_2025.json');
      fs.writeFileSync(uniqueRecordsPath, JSON.stringify(uniqueRecords, null, 2));
      console.log(`📝 Sačuvani jedinstveni zapisi u ${uniqueRecordsPath}`);

      // Brisanje duplikata
      await prisma.export.deleteMany({
        where: {
          id: {
            in: duplicates
          }
        }
      });
      console.log(`✅ Uklonjeno ${duplicates.length} dupliranih zapisa za 2025.`);
      console.log(`ℹ️ Zadržano ${uniqueRecords.length} jedinstvenih zapisa.`);
    } else {
      console.log('ℹ️ Nema dupliranih zapisa za 2025.');
    }
  } catch (error) {
    console.error('Error cleaning up duplicate exports:', error);
    throw error; // Prosleđujemo grešku dalje da bismo zaustavili proces
  }
}

async function insertExports2025() {
  try {
    // Prvo očistimo duplikate
    await cleanupDuplicateExports2025();

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

    // Prvo proverimo postojeće zapise u bazi
    const existingExports = await prisma.export.findMany({
      where: {
        year: 2025
      },
      select: {
        date: true,
        product: true,
        countryCode: true,
        quantityKg: true,
        valueEur: true
      }
    });

    // Kreiramo Set za brže pretraživanje postojećih zapisa
    const existingSet = new Set(
      existingExports.map(exp => 
        `${exp.date.toISOString()}|${exp.product}|${exp.countryCode}|${exp.quantityKg}|${exp.valueEur}`
      )
    );

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

      const exportData: ExportData = {
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
      };

      // Proveravamo da li zapis već postoji
      const key = `${exportData.date.toISOString()}|${exportData.product}|${exportData.countryCode}|${exportData.quantityKg}|${exportData.valueEur}`;
      if (!existingSet.has(key)) {
        cleaned.push(exportData);
      }
    });

    if (cleaned.length > 0) {
      await prisma.export.createMany({
        data: cleaned,
        skipDuplicates: true
      });
      console.log(`✅ Ubačeno ${cleaned.length} novih export zapisa za 2025.`);
    } else {
      console.log('ℹ️ Nema novih zapisa za ubacivanje za 2025.');
    }

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
