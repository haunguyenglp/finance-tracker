// import { Box, Typography } from "@mui/material";

// const months = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
// ];

// const Sidebar = () => {
//   return (
//     <>
//       {/* Logo */}
//       <Box
//         sx={{
//           width: 48,
//           height: 48,
//           borderRadius: "50%",
//           backgroundColor: "#1e3a8a",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//           fontWeight: 700,
//           mb: 3,
//         }}
//       >
//         PF
//       </Box>

//       {/* Months */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 1.5,
//           mt: 1,
//         }}
//       >
//         {months.map((m) => (
//           <Typography
//             key={m}
//             sx={{
//               color: "#c7d2fe",
//               fontSize: 14,
//               cursor: "pointer",
//               "&:hover": {
//                 color: "#fff",
//                 fontWeight: 600,
//               },
//             }}
//           >
//             {m}
//           </Typography>
//         ))}
//       </Box>
//     </>
//   );
// };

// export default Sidebar;

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
