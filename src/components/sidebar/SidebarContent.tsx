import { Box, Typography, Stack } from "@mui/material";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const SidebarContent = () => {
  return (
    <Box
      sx={{
        height: "100%",
        px: 2,
        py: 3,
        color: "#e2e8f0",
      }}
    >
      {/* Logo */}
      {/* <Typography
        sx={{
          fontSize: 18,
          fontWeight: 700,
          mb: 4,
          textAlign: "center",
        }}
      >
        FINANCE
      </Typography> */}
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

      {/* Month list */}
      <Stack spacing={1}>
        {months.map((month) => (
          <Box
            key={month}
            sx={{
              // px: 2,
              py: 1,
              borderRadius: 2,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            {month}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SidebarContent;
