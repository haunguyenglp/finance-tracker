import { Box, Typography, Paper, TextField, Button, Stack, Link } from "@mui/material";
import { ThemeToggle } from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng ký sau
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
            ? "linear-gradient(to right, #ffecd2, #fcb69f)"
            : "linear-gradient(to right, #232526, #414345)",
        transition: "background 0.4s ease-in-out",
      }}
    >
      <Box position="absolute" top={16} right={16}>
        <ThemeToggle />
      </Box>

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
          Đăng ký tài khoản
        </Typography>

        <form onSubmit={handleRegister}>
          <Stack spacing={2}>
            <TextField label="Họ tên" fullWidth required />
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Mật khẩu" type="password" fullWidth required />
            <TextField label="Xác nhận mật khẩu" type="password" fullWidth required />

            <Button type="submit" variant="contained" fullWidth>
              Đăng ký
            </Button>

            <Link underline="hover" onClick={() => navigate("/login")} sx={{ cursor: "pointer" }}>
              Đã có tài khoản? Đăng nhập
            </Link>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
