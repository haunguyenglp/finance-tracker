import { Box, Typography, Paper, TextField, Button, Stack, Link } from "@mui/material";
import { ThemeToggle } from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng nhập sau
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
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Mật khẩu" type="password" fullWidth required />
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
