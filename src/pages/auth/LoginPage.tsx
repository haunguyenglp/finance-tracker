import { Box, Typography, Paper, TextField, Button, Stack, Link } from "@mui/material";
import { ThemeToggle } from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";



const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Xử lý đăng nhập sau
  //   try {
  //   const data = await loginUser(email, password);
  //   console.log("Đăng nhập thành công:", data);

  //   // Ví dụ: lưu token vào localStorage và redirect
  //   localStorage.setItem("token", data.accessToken);
  //   navigate("/dashboard");
  //   } catch (err: any) {
  //     console.log(err);
  //     alert(err.message);
  //   }
  // };
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      login(res.user, password);
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };


  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      px={2}
      sx={{
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(to right, #a1c4fd, #c2e9fb)"
            : "linear-gradient(to right, #232526, #414345)",
        transition: "background 0.4s ease-in-out",
      }}
    >
      {/* Nút đổi theme */}
      <Box position="absolute" top={16} right={16}>
        <ThemeToggle />
      </Box>

      {/* Form đăng nhập */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 },
          width: "100%",
          maxWidth: 400,
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(30,30,30, 0.85)",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Đăng nhập
        </Typography>

        <form onSubmit={handleLogin}>
          <Stack spacing={2}>
            <TextField 
              label="Email" 
              type="email" 
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            <TextField 
              label="Mật khẩu" 
              type="password" 
              fullWidth 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <Button type="submit" variant="contained" fullWidth>
              Đăng nhập
            </Button>

            <Stack direction="row" justifyContent="space-between">
              <Link underline="hover" onClick={() => navigate("/forgot-password")} sx={{ cursor: "pointer" }}>
                Quên mật khẩu?
              </Link>
              <Link underline="hover" onClick={() => navigate("/register")} sx={{ cursor: "pointer" }}>
                Đăng ký
              </Link>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
