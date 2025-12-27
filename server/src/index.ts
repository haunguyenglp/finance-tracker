/// <reference path="./types/express/index.d.ts" />
console.log("🔥 INDEX.TS STARTED");

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import { authMiddleware } from './middlewares/authMiddleware';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // FE port
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/dashboard", authMiddleware, dashboardRoutes);

app.get('/favicon.ico', (_, res) => res.status(204).end());

app.get('/', (_, res) => {
  console.log("✅ Received GET / request");
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
