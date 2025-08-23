import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authenticateToken, (req, res) => {
  res.json({ message: "Chào mừng đến với dashboard!" });
});

export default router;
