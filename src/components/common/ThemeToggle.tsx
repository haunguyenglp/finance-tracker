import { IconButton } from "@mui/material";
import { useThemeMode } from "../../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <IconButton onClick={toggleMode} color="inherit">
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
