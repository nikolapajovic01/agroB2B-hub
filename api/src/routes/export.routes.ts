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

// // Get export statistics for 2025
// router.get('/2025/statistics', async (req, res) => {
//   try {
//     const exports = await prisma.export.findMany({
//       where: {
//         year: 2025,
//         type: 'rolend'
//       },
//       orderBy: {
//         month: 'asc'
//       }
//     });

//     // Group by month and country
//     const monthlyStats: Record<string, any> = {};
//     const allTimeStats: Record<string, { quantityKg: number; valueEur: number; count: number }> = {};

//     exports.forEach(record => {
//       const month = record.month;
//       const monthName = getMonthName(month);
//       const country = record.countryName;

//       // Initialize month if not exists
//       if (!monthlyStats[monthName]) {
//         monthlyStats[monthName] = {};
//       }

//       // Initialize country in month if not exists
//       if (!monthlyStats[monthName][country]) {
//         monthlyStats[monthName][country] = {
//           quantityKg: 0,
//           valueEur: 0,
//           count: 0
//         };
//       }

//       // Add to monthly stats
//       monthlyStats[monthName][country].quantityKg += record.quantityKg;
//       monthlyStats[monthName][country].valueEur += record.valueEur;
//       monthlyStats[monthName][country].count += 1;

//       // Add to all-time stats
//       if (!allTimeStats[country]) {
//         allTimeStats[country] = {
//           quantityKg: 0,
//           valueEur: 0,
//           count: 0
//         };
//       }
//       allTimeStats[country].quantityKg += record.quantityKg;
//       allTimeStats[country].valueEur += record.valueEur;
//       allTimeStats[country].count += 1;
//     });

//     // Format monthly stats
//     const formattedStats: Record<string, any[]> = {
//       "Celokupna 2025": Object.entries(allTimeStats)
//         .map(([country, stats]) => ({
//           countryName: country,
//           quantityKg: stats.quantityKg,
//           unitPriceEur: stats.valueEur / stats.quantityKg
//         }))
//         .sort((a, b) => b.quantityKg - a.quantityKg)
//     };

//     // Add monthly stats
//     Object.entries(monthlyStats).forEach(([month, countries]) => {
//       formattedStats[month] = Object.entries(countries)
//         .map(([country, stats]: [string, any]) => ({
//           countryName: country,
//           quantityKg: stats.quantityKg,
//           unitPriceEur: stats.valueEur / stats.quantityKg
//         }))
//         .sort((a, b) => b.quantityKg - a.quantityKg);
//     });

//     res.json(formattedStats);
//   } catch (error) {
//     console.error('Error fetching export statistics:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// Get export statistics for 2025
router.get('/2025/statistics', async (req, res) => {
  try {
    const exports = await prisma.export.findMany({
      where: {
        year: 2025,
        type: 'rolend'
      },
      orderBy: {
        month: 'asc'
      }
    });

    // Group by month and country
    const monthlyStats: Record<string, any> = {};
    const allTimeStats: Record<string, { quantityTons: number; valueEur: number; count: number }> = {};

    exports.forEach(record => {
      const month = record.month;
      const monthName = getMonthName(month);
      const country = record.countryName;

      // Initialize month if not exists
      if (!monthlyStats[monthName]) {
        monthlyStats[monthName] = {};
      }

      // Initialize country in month if not exists
      if (!monthlyStats[monthName][country]) {
        monthlyStats[monthName][country] = {
          quantityTons: 0,
          valueEur: 0,
          count: 0
        };
      }

      // Add to monthly stats (convert kg to tons)
      monthlyStats[monthName][country].quantityTons += record.quantityKg / 1000;
      monthlyStats[monthName][country].valueEur += record.valueEur;
      monthlyStats[monthName][country].count += 1;

      // Add to all-time stats
      if (!allTimeStats[country]) {
        allTimeStats[country] = {
          quantityTons: 0,
          valueEur: 0,
          count: 0
        };
      }
      allTimeStats[country].quantityTons += record.quantityKg / 1000;
      allTimeStats[country].valueEur += record.valueEur;
      allTimeStats[country].count += 1;
    });

    // Format monthly stats
    const formattedStats: Record<string, any[]> = {
      "Celokupna 2025": Object.entries(allTimeStats)
        .map(([country, stats]) => ({
          countryName: country,
          quantityTons: Math.round(stats.quantityTons * 100) / 100,
          unitPriceEur: Math.round((stats.valueEur / (stats.quantityTons * 1000)) * 100) / 100
        }))
        .sort((a, b) => b.quantityTons - a.quantityTons)
    };

    // Add monthly stats
    Object.entries(monthlyStats).forEach(([month, countries]) => {
      formattedStats[month] = Object.entries(countries)
        .map(([country, stats]: [string, any]) => ({
          countryName: country,
          quantityTons: Math.round(stats.quantityTons * 100) / 100,
          unitPriceEur: Math.round((stats.valueEur / (stats.quantityTons * 1000)) * 100) / 100
        }))
        .sort((a, b) => b.quantityTons - a.quantityTons);
    });

    res.json(formattedStats);
  } catch (error) {
    console.error('Error fetching export statistics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get export percentage statistics for 2025
router.get('/2025/percentage', async (req, res) => {
  try {
    const exports = await prisma.export.findMany({
      where: {
        year: 2025,
        type: {
          not: 'uvoz'
        }
      },
      orderBy: {
        month: 'asc'
      }
    });

    // Calculate total quantities for percentage calculation
    let totalQuantity = 0;
    const monthlyTotals: Record<string, number> = {};
    const countryStats: Record<string, { total: number; monthly: Record<string, number> }> = {};

    exports.forEach(record => {
      const month = record.month;
      const monthName = getMonthName(month);
      const country = record.countryName;

      // Add to total quantity
      totalQuantity += record.quantityKg;
      
      // Add to monthly total
      if (!monthlyTotals[monthName]) {
        monthlyTotals[monthName] = 0;
      }
      monthlyTotals[monthName] += record.quantityKg;

      // Initialize country stats if not exists
      if (!countryStats[country]) {
        countryStats[country] = {
          total: 0,
          monthly: {}
        };
      }

      // Add to country total
      countryStats[country].total += record.quantityKg;

      // Add to country monthly stats
      if (!countryStats[country].monthly[monthName]) {
        countryStats[country].monthly[monthName] = 0;
      }
      countryStats[country].monthly[monthName] += record.quantityKg;
    });

    // Format response
    const response = {
      total: Object.entries(countryStats)
        .map(([country, stats]) => ({
          countryName: country,
          percentage: (stats.total / totalQuantity * 100).toFixed(2)
        }))
        .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)),
      monthly: Object.keys(monthlyTotals).reduce((acc, month) => {
        acc[month] = Object.entries(countryStats)
          .filter(([_, stats]) => stats.monthly[month] > 0)
          .map(([country, stats]) => ({
            countryName: country,
            percentage: (stats.monthly[month] / monthlyTotals[month] * 100).toFixed(2)
          }))
          .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
        return acc;
      }, {} as Record<string, Array<{ countryName: string; percentage: string }>>)
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching export percentage statistics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function getMonthName(month: number): string {
  const months = [
    'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
    'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
  ];
  return months[month - 1];
}

export default router;
