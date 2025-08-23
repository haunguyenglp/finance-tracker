import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// import '../../types/express';
import '@/types/express';

interface JwtPayload {
  userId: number;
  // bạn có thể thêm role hoặc email nếu cần
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Không có token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = { id: decoded.userId }; // thêm thông tin user vào request
    next();
  } catch (err) {
    console.log('error====', err);
    return res.status(401).json({ message: 'Token không hợp lệ hoặc đã hết hạn' });
  }
};
