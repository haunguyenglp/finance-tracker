// import { Box, Avatar, Typography } from "@mui/material";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// const DashboardHeader = () => {
//   return (
//     <Box
//       sx={{
//         px: 3,
//         py: 2,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderBottom: "1px solid #e5e7eb",
//       }}
//     >
//       {/* LEFT: Available Balance */}
//       <Box>
//         <Typography
//           sx={{
//             fontSize: 13,
//             color: "#64748b",
//             mb: 0.5,
//           }}
//         >
//           Available Balance
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: 26,
//             fontWeight: 700,
//             color: "#0ea5e9", // xanh ngọc giống UI mẫu
//           }}
//         >
//           $14,822
//         </Typography>
//       </Box>

//       {/* RIGHT */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           gap: 4,
//         }}
//       >
//         {/* Date */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1,
//             color: "#475569",
//             fontSize: 14,
//           }}
//         >
//           <CalendarMonthIcon fontSize="small" />
//           <Typography fontSize={14}>
//             Sunday, February 5, 2023
//           </Typography>
//         </Box>

//         {/* User */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1.5,
//           }}
//         >
//           <Avatar
//             sx={{
//               width: 40,
//               height: 40,
//               bgcolor: "#f97316",
//               fontWeight: 600,
//             }}
//           >
//             U
//           </Avatar>

//           <Box>
//             <Typography fontSize={14} fontWeight={600}>
//               Simon K. Jimmy
//             </Typography>
//             <Typography fontSize={12} color="#64748b">
//               Mortgage consultant
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardHeader;


// import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DashboardHeader = ({ onMenuClick }: { onMenuClick: () => void }) => {
    return (
    <Box
      sx={{
        px: 3,
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Hamburger - mobile only */}
      <IconButton
        onClick={onMenuClick}
        sx={{ display: { md: "none" }, mr: 1 }}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      
      {/* LEFT: Available Balance */}
      <Box>
        <Typography
          sx={{
            fontSize: 13,
            color: "#ffffff",
            mb: 0.5,
          }}
        >
          Available Balance
        </Typography>
        <Typography
          sx={{
            fontSize: 26,
            fontWeight: 700,
            color: "#0ea5e9", // xanh ngọc giống UI mẫu
          }}
        >
          $14,822
        </Typography>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Date */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#475569",
            fontSize: 14,
          }}
        >
          <CalendarMonthIcon fontSize="small" />
          <Typography fontSize={14}>
            Sunday, February 5, 2023
          </Typography>
        </Box>

        {/* User */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#f97316",
              fontWeight: 600,
            }}
          >
            U
          </Avatar>

          <Box>
            <Typography fontSize={14} fontWeight={600} color="#ffffff">
              Simon K. Jimmy
            </Typography>
            <Typography fontSize={12} color="#64748b">
              Mortgage consultant
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
