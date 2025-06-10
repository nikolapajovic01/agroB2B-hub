import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Get all exports
router.get('/', async (req, res) => {
  try {
    const exports = await prisma.export.findMany({
      orderBy: { date: 'desc' },
    });
    res.json(exports);
  } catch (error) {
    console.error('Greška pri dohvatanju export podataka:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get exports by year
router.get('/year/:year', async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const exports = await prisma.export.findMany({
      where: { year },
      orderBy: { date: 'desc' },
    });
    res.json(exports);
  } catch (error) {
    console.error('Greška pri dohvatanju export podataka:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



export default router;
