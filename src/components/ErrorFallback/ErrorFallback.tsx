// components/shared/ErrorFallback.tsx
import { Box, Button, Typography, Paper } from "@mui/material";
import { ErrorOutline as ErrorIcon } from "@mui/icons-material";

interface ErrorFallbackProps {
  error: Error;
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        p: 2,
      }}
    >
      <Paper
        sx={{
          p: 4,
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        <ErrorIcon sx={{ fontSize: 60, color: "error.main", mb: 2 }} />
        <Typography variant="h5" gutterBottom>
          Oops! Something went wrong
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {error.message}
        </Typography>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </Paper>
    </Box>
  );
};
