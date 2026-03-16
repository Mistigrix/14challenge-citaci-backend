import express from 'express';
import cors from 'cors';
import citationsRouter from './routes/citations';
import statsRouter from './routes/stats';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/citations', citationsRouter);
app.use('/api/stats', statsRouter);

// 404
app.use((_req, res) => {
  res.status(404).json({ error: 'Route introuvable.' });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 CitaCI API running on http://localhost:${PORT}`);
});

export default app;
