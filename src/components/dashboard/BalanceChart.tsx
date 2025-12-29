import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 3000, expense: 1398 },
  { month: "Mar", income: 5000, expense: 2800 },
  { month: "Apr", income: 4780, expense: 3908 },
  { month: "May", income: 5890, expense: 4800 },
  { month: "Jun", income: 6390, expense: 3800 },
];

const BalanceChart = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 3,
        p: 3,
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        height: 360,
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          mb: 2,
        }}
      >
        Statistics
      </Typography>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#0ea5e9"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BalanceChart;
