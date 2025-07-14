import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#1976d2" },
            background: { default: "#f5f5f5", paper: "#fff" },
          }
        : {
            primary: { main: "#90caf9" },
            background: { default: "#121212", paper: "#1e1e1e" },
          }),
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    }    
  });
