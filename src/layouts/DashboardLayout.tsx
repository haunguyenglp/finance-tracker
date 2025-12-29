// import { Box } from "@mui/material";
// import Sidebar from "../components/sidebar/Sidebar";
// import Header from "../components/header/DashboardHeader";

// interface Props {
//   children: React.ReactNode;
// }

// const DashboardLayout = ({ children }: Props) => {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#0b132b", // nền xanh đậm toàn app
//         p: 2.5, // ⭐ padding tổng 4 phía (rất quan trọng)
//         boxSizing: "border-box",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           height: "100%",
//           gap: 2.5,
//         }}
//       >
//         {/* Sidebar */}
//         <Box
//           sx={{
//             width: 96,
//             background:
//               "linear-gradient(180deg, #1b3886 0%, #142146 100%)",
//             borderRadius: 4, // ⭐ bo tròn kiểu viên thuốc
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             py: 2,
//           }}
//         >
//           <Sidebar />
//         </Box>

//         {/* Main area */}
//         <Box
//           sx={{
//             flex: 1,
//             backgroundColor: "#f8fafc",
//             borderRadius: 4,
//             overflow: "hidden",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Header />
//           <Box sx={{ flex: 1, p: 3 }}>{children}</Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardLayout;


import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import DashboardHeader from "../components/header/DashboardHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        p: { xs: 1, sm: 2 },
        display: "flex",
      }}
    >
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar open={open} onClose={() => setOpen(false)} />

      {/* Main */}
      <Box
        sx={{
          flex: 1,
          mx: { xs: 0, md: 2 },
          width: "100%",
        }}
      >
        <DashboardHeader onMenuClick={() => setOpen(true)} />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
