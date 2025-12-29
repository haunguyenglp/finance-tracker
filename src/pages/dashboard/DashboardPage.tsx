// import { useEffect, useState } from "react";
// import { getDashboardData } from "../../services/dashboardService";

// const DashboardPage = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     console.log('Initial Dashboard...')
//     const fetchData = async () => {
//       try {
//         const result = await getDashboardData();
//         setData(result);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Đang tải...</div>;
//   if (error) return <div>Lỗi: {error}</div>;

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default DashboardPage;


// import { Box, Grid, Card, CardContent, Typography, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import { AccountBalanceWallet, TrendingUp, TrendingDown, Menu as MenuIcon } from "@mui/icons-material";

// const drawerWidth = 220;

// export default function DashboardPage() {
//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#0f172a" }}>
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             bgcolor: "#020617",
//             color: "#e5e7eb",
//             borderRight: "1px solid #1e293b",
//           },
//         }}
//       >
//         <Toolbar />
//         <List>
//           {["Dashboard", "Transactions", "Categories", "Goals"].map((text) => (
//             <ListItem button key={text}>
//               <ListItemIcon sx={{ color: "#38bdf8" }}>
//                 <AccountBalanceWallet />
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       {/* Main content */}
//       <Box sx={{ flexGrow: 1 }}>
//         {/* Header */}
//         <AppBar position="static" elevation={0} sx={{ bgcolor: "#020617" }}>
//           <Toolbar>
//             <IconButton edge="start" color="inherit" sx={{ mr: 2, display: { md: "none" } }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" sx={{ fontWeight: 600 }}>
//               Financial Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         {/* Content */}
//         <Box sx={{ p: 3 }}>
//           <Grid container spacing={3}>
//             {/* Balance */}
//             <Grid item xs={12} md={4}>
//               <Card sx={{ bgcolor: "#020617", border: "1px solid #1e293b" }}>
//                 <CardContent>
//                   <Typography variant="body2" color="gray">Total Balance</Typography>
//                   <Typography variant="h4" sx={{ mt: 1 }}>$12,450</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* Income */}
//             <Grid item xs={12} md={4}>
//               <Card sx={{ bgcolor: "#020617", border: "1px solid #1e293b" }}>
//                 <CardContent>
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                     <TrendingUp color="success" />
//                     <Typography variant="body2">Income</Typography>
//                   </Box>
//                   <Typography variant="h4" sx={{ mt: 1 }}>$5,200</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* Expense */}
//             <Grid item xs={12} md={4}>
//               <Card sx={{ bgcolor: "#020617", border: "1px solid #1e293b" }}>
//                 <CardContent>
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                     <TrendingDown color="error" />
//                     <Typography variant="body2">Expense</Typography>
//                   </Box>
//                   <Typography variant="h4" sx={{ mt: 1 }}>$2,150</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* Placeholder for chart */}
//             <Grid item xs={12}>
//               <Card sx={{ bgcolor: "#020617", border: "1px solid #1e293b", height: 260 }}>
//                 <CardContent>
//                   <Typography variant="body2" color="gray">Cashflow Chart (coming soon)</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }



// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Avatar,
//   Stack,
//   Divider,
// } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import {
//   AccountBalanceWallet,
//   TrendingUp,
//   TrendingDown,
// } from "@mui/icons-material";

// const StatCard = ({
//   title,
//   value,
//   icon,
//   gradient,
// }: {
//   title: string;
//   value: string;
//   icon: React.ReactNode;
//   gradient: string;
// }) => (
//   <Card
//     sx={{
//       height: "100%",
//       background: gradient,
//       color: "#fff",
//       borderRadius: 3,
//     }}
//   >
//     <CardContent>
//       <Stack direction="row" justifyContent="space-between">
//         <Box>
//           <Typography variant="body2" sx={{ opacity: 0.8 }}>
//             {title}
//           </Typography>
//           <Typography variant="h5" fontWeight={700}>
//             {value}
//           </Typography>
//         </Box>
//         <Avatar sx={{ bgcolor: "rgba(255,255,255,0.2)" }}>{icon}</Avatar>
//       </Stack>
//     </CardContent>
//   </Card>
// );

// export default function DashboardPage() {
//   return (
//     <Box sx={{ p: { xs: 2, md: 4 } }}>
//       {/* Header */}
//       <Stack
//         direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//         mb={4}
//       >
//         <Box>
//           <Typography variant="h5" fontWeight={700}>
//             Dashboard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Tổng quan tài chính cá nhân
//           </Typography>
//         </Box>

//         <Avatar sx={{ bgcolor: "#ff9800" }}>HN</Avatar>
//       </Stack>

//       {/* Stat cards */}
//       <Grid container spacing={3}>
//         <Grid size={{ xs: 12, md: 4 }}>
//           <StatCard
//             title="Tổng số dư"
//             value="120,000,000 ₫"
//             icon={<AccountBalanceWallet />}
//             gradient="linear-gradient(135deg, #ff9800, #ff5722)"
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 4 }}>
//           <StatCard
//             title="Thu nhập tháng"
//             value="+25,000,000 ₫"
//             icon={<TrendingUp />}
//             gradient="linear-gradient(135deg, #4caf50, #2e7d32)"
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 4 }}>
//           <StatCard
//             title="Chi tiêu tháng"
//             value="-18,000,000 ₫"
//             icon={<TrendingDown />}
//             gradient="linear-gradient(135deg, #f44336, #c62828)"
//           />
//         </Grid>
//       </Grid>

//       {/* Recent transactions */}
//       <Card sx={{ mt: 4, borderRadius: 3 }}>
//         <CardContent>
//           <Typography variant="h6" fontWeight={600} mb={2}>
//             Giao dịch gần đây
//           </Typography>

//           <Stack spacing={2}>
//             {[
//               { name: "Ăn uống", amount: "-250,000 ₫" },
//               { name: "Lương", amount: "+20,000,000 ₫" },
//               { name: "Mua sắm", amount: "-1,200,000 ₫" },
//             ].map((item, idx) => (
//               <Box key={idx}>
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="center"
//                 >
//                   <Typography>{item.name}</Typography>
//                   <Typography
//                     color={
//                       item.amount.startsWith("+")
//                         ? "success.main"
//                         : "error.main"
//                     }
//                     fontWeight={600}
//                   >
//                     {item.amount}
//                   </Typography>
//                 </Stack>
//                 {idx < 2 && <Divider sx={{ mt: 1 }} />}
//               </Box>
//             ))}
//           </Stack>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }




// import { Box, Card, CardContent, Typography } from "@mui/material";

// export default function DashboardPage() {
//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: {
//           xs: "1fr",
//           md: "repeat(4, 1fr)",
//         },
//         gap: 2,
//       }}
//     >
//       {/* TOTAL BALANCE – chiếm 2 cột */}
//       <Card
//         sx={{
//           gridColumn: { md: "span 2" },
//           background:
//             "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
//           minHeight: 140,
//         }}
//       >
//         <CardContent>
//           <Typography variant="subtitle2">Total Balance</Typography>
//           <Typography variant="h3">$12,500</Typography>
//         </CardContent>
//       </Card>

//       {/* INCOME */}
//       <Card sx={{ minHeight: 140 }}>
//         <CardContent>
//           <Typography variant="subtitle2">Income</Typography>
//           <Typography variant="h4">$4,200</Typography>
//         </CardContent>
//       </Card>

//       {/* EXPENSE */}
//       <Card sx={{ minHeight: 140 }}>
//         <CardContent>
//           <Typography variant="subtitle2">Expense</Typography>
//           <Typography variant="h4">$2,800</Typography>
//         </CardContent>
//       </Card>

//       {/* CHART PLACEHOLDER */}
//       <Card
//         sx={{
//           gridColumn: { md: "span 3" },
//           minHeight: 260,
//         }}
//       >
//         <CardContent>
//           <Typography variant="h6">Income & Expenses</Typography>
//           <Typography color="text.secondary">
//             (Chart sẽ làm ở bước tiếp theo)
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* SPENDING LIST */}
//       <Card sx={{ minHeight: 260 }}>
//         <CardContent>
//           <Typography variant="h6">Spendings</Typography>
//           <Typography color="text.secondary">
//             Housing, Food, Transport...
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }



import { Box, Card, Typography } from '@mui/material';
import DashboardLayout from '../../layouts/DashboardLayout';
import BalanceChart from '../../components/dashboard/BalanceChart';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 2,
        }}
      >
        {/* Total Balance */}
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            color: '#fff',
            background: 'linear-gradient(135deg, #fb923c, #f97316)',
          }}
        >
          <Typography>Total Balance</Typography>
          <Typography variant="h4" fontWeight={700}>
            $12,500
          </Typography>
        </Card>

        {/* Income */}
        <Card sx={{ p: 3, borderRadius: 3 }}>
          <Typography>Income</Typography>
          <Typography variant="h5" fontWeight={600}>
            $4,200
          </Typography>
        </Card>

        {/* Expense */}
        <Card sx={{ p: 3, borderRadius: 3 }}>
          <Typography>Expense</Typography>
          <Typography variant="h5" fontWeight={600}>
            $2,800
          </Typography>
        </Card>
      </Box>
      
      {/* BalanceChart */}
      <BalanceChart />
    </DashboardLayout>

  );
}
