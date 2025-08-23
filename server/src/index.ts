import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
import { authMiddleware } from './middlewares/authMiddleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", authMiddleware, dashboardRoutes);

app.get('/favicon.ico', (_, res) => res.status(204).end());

app.get('/', (_, res) => {
  console.log("✅ Received GET / request");
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
