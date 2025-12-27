// // components/layout/Sidebar.tsx
// import { Box, Typography, List, ListItemButton } from '@mui/material';

// export const SIDEBAR_WIDTH = 240;

// const months = [
//   'January', 'February', 'March', 'April',
//   'May', 'June', 'July', 'August',
//   'September', 'October', 'November', 'December'
// ];

// export default function Sidebar() {
//   return (
//     <Box
//       sx={{
//         width: SIDEBAR_WIDTH,
//         bgcolor: '#0f172a',
//         color: '#fff',
//         borderRadius: 4,        // 👈 bo tròn mạnh
//         py: 2,
//         height: 'calc(100vh - 40px)', // 👈 không full height
//         position: 'fixed',
//         left: 20,
//         top: 20,
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* Logo */}
//       <Box
//         sx={{
//           height: 64,
//           display: 'flex',
//           alignItems: 'center',
//           px: 2,
//           fontWeight: 700,
//           fontSize: 20,
//         }}
//       >
//         LOGO
//       </Box>

//       {/* Month list */}
//       <List sx={{ px: 1 }}>
//         {months.map((month) => (
//           <ListItemButton
//             key={month}
//             sx={{
//               borderRadius: 2,
//               my: 0.5,
//               '&.Mui-selected': {
//                 bgcolor: 'rgba(255,255,255,0.15)',
//               },
//             }}
//             selected={month === 'March'}
//           >
//             <Typography fontSize={14}>{month}</Typography>
//           </ListItemButton>
//         ))}
//       </List>
//     </Box>
//   );
// }


import { Box, Typography } from "@mui/material";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const Sidebar = () => {
  return (
    <>
      {/* Logo */}
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          backgroundColor: "#1e3a8a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          mb: 3,
        }}
      >
        PF
      </Box>

      {/* Months */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          mt: 1,
        }}
      >
        {months.map((m) => (
          <Typography
            key={m}
            sx={{
              color: "#c7d2fe",
              fontSize: 14,
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
                fontWeight: 600,
              },
            }}
          >
            {m}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default Sidebar;
