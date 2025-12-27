import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import SavingsIcon from "@mui/icons-material/Savings";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#020617",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PaidIcon />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SavingsIcon />
          </ListItemIcon>
          <ListItemText primary="Goals" />
        </ListItemButton>
      </List>
    </Box>
  );
}
