import { Box, Typography, Paper, TextField, Button, Stack, Link } from "@mui/material";
import { ThemeToggle } from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi yêu cầu reset password sau
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
            ? "linear-gradient(to right, #e0c3fc, #8ec5fc)"
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
          Quên mật khẩu
        </Typography>

        <form onSubmit={handleForgotPassword}>
          <Stack spacing={2}>
            <TextField label="Nhập email của bạn" type="email" fullWidth required />
            <Button type="submit" variant="contained" fullWidth>
              Gửi yêu cầu
            </Button>

            <Link underline="hover" onClick={() => navigate("/login")} sx={{ cursor: "pointer" }}>
              Quay lại đăng nhập
            </Link>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default ForgotPasswordPage;
