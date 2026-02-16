"use client";

import { Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function EhsanPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/map");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          p: 6,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={500} gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Click the button below to see the list of stations in Germany.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          size="large"
          sx={{ borderRadius: 2, px: 4 }}
        >
          View stations
        </Button>
      </Box>
    </Box>
  );
}
