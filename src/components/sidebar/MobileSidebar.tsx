import { Drawer, Box } from "@mui/material";
import SidebarContent from "./SidebarContent";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ open, onClose }: Props) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "#0f172a",
          width: 120,
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
        },
      }}
    >
      <Box sx={{ height: "100%" }}>
        <SidebarContent />
      </Box>
    </Drawer>
  );
};

export default MobileSidebar;
