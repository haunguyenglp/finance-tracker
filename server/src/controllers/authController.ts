import { Request, Response} from 'express';
const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Kiểm tra email đã tồn tại chưa
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    // Mã hoá mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Thêm user mới
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, created_at",
      [name, email, hashedPassword]
    );

    return res.status(201).json({
      message: "Đăng ký thành công",
      user: result.rows[0],
    });
  } catch (err: any) {
    console.error("Register error:", err.message);
    return res.status(500).json({ message: "Lỗi server" });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userRes = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = userRes.rows[0];
    if (!user) {
      return res.status(400).json({ message: "Email hoặc mật khẩu không đúng" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email hoặc mật khẩu không đúng" });
    }

    const accessToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set refreshToken into cookie.
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,        // production => true (HTTPS)
      sameSite: "lax",   // chống CSRF
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 ngày
      path: "/api/auth/refresh-token",
    });

    return res.status(200).json({
      message: "Đăng nhập thành công",
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

const refreshToken = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  console.log('token...', token); // => chỗ này tôi log nó có token, nếu không có thì nó đã quăng về 401 chứ không phải là 403.
  if (!token) {
    return res.status(401).json({ message: "Không có refresh token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const newAccessToken = jwt.sign(
      { userId: decoded.userId, email: decoded.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    return res.status(200).json({
      accessToken: newAccessToken
    });
  } catch (err: any) {
    console.error("Refresh token error:", err.message);
    return res.status(403).json({ message: "Refresh token không hợp lệ" });
  }
};


module.exports = { register, login, refreshToken };
