import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { DB_CATEGORIES } from '../types';

export async function getStats(req: Request, res: Response, next: NextFunction) {
  try {
    const [total, perCategory] = await Promise.all([
      prisma.citation.count(),
      prisma.citation.groupBy({
        by: ['category'],
        _count: { _all: true },
        orderBy: { _count: { category: 'desc' } },
      }),
    ]);

    const categoryBreakdown = perCategory.map((item) => ({
      category: item.category,
      count: item._count._all,
    }));

    const mostPopularCategory = categoryBreakdown[0] ?? null;

    res.json({
      data: {
        totalCitations: total,
        totalCategories: DB_CATEGORIES.length,
        categories: categoryBreakdown,
        mostPopularCategory: mostPopularCategory
          ? { name: mostPopularCategory.category, count: mostPopularCategory.count }
          : null,
      },
    });
  } catch (err) {
    next(err);
  }
}
