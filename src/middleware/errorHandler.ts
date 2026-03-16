import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(`[${new Date().toISOString()}] ${req.method} ${req.url} — ${err.message}`);
  res.status(500).json({ error: 'Erreur interne du serveur.', message: err.message });
}
