import { Box } from "@mui/material";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 220,
        backgroundColor: "#0f172a",
        borderRadius: "32px",
        m: 2,
        display: { xs: "none", md: "block" },
      }}
    >
      <SidebarContent />
    </Box>
  );
};

export default Sidebar;
