import pool from "../config/db";
import { Request, Response} from 'express';

export const getMe = async (req: Request, res: Response) => {
  try {
    // authMiddleware đã set req.user
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const result = await pool.query(
      "SELECT id, name, email FROM users WHERE id = $1",
      [userId]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: "User không tồn tại" });
    }

    return res.status(200).json(user);
  } catch (err: any) {
    console.error("getMe error:", err.message);
    return res.status(500).json({ message: "Lỗi server" });
  }
};

module.exports = { getMe };