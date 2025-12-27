// import { Box } from '@mui/material';
// import Sidebar, { SIDEBAR_WIDTH } from '../components/sidebar/Sidebar';
// import DashboardHeader from '../components/header/DashboardHeader';

// type Props = {
//   children: React.ReactNode;
// };

// export default function DashboardLayout({ children }: Props) {
//   return (
//     // 🔹 App background (xanh đậm + padding)
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: '#0b132b',
//         p: 2.5, // 👈 khoảng thụt bạn thấy trong UI mẫu
//       }}
//     >
//       {/* 🔹 Inner layout */}
//       <Box
//         sx={{
//           display: 'flex',
//           minHeight: '100%',
//         }}
//       >
//         <Sidebar />

//         {/* Main content */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             ml: `${SIDEBAR_WIDTH + 16}px`, // 👈 chừa khoảng do sidebar không sát mép
//             bgcolor: '#f4f6f8',
//             borderRadius: 4,
//             p: 3,
//           }}
//         >
//           <DashboardHeader />
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// }


import { Box } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/DashboardHeader";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0b132b", // nền xanh đậm toàn app
        p: 2.5, // ⭐ padding tổng 4 phía (rất quan trọng)
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          gap: 2.5,
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: 96,
            background:
              "linear-gradient(180deg, #1b3886 0%, #142146 100%)",
            borderRadius: 4, // ⭐ bo tròn kiểu viên thuốc
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 2,
          }}
        >
          <Sidebar />
        </Box>

        {/* Main area */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#f8fafc",
            borderRadius: 4,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Box sx={{ flex: 1, p: 3 }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
