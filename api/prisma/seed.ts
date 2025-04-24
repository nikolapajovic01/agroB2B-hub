import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

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
}

main()

    .then(() => prisma.$disconnect())
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
