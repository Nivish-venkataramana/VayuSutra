import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

/**
 * ErrorState Component
 * Understated, minimalist error banner with retry options.
 */
const ErrorState = ({ message, onRetry, onDefaultSearch }) => {
  const isNotFound = message && message.toLowerCase().includes("not found");

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 4, sm: 5 },
        borderRadius: "20px",
        textAlign: "center",
        mb: { xs: 4, sm: 6 },
        backgroundColor: "#ffffff",
        border: "1px solid rgba(239, 68, 68, 0.2)",
        boxShadow: "0 4px 20px rgba(239, 68, 68, 0.04)",
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 9999,
          backgroundColor: "rgba(239, 68, 68, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 2,
        }}
      >
        <ErrorOutlineRoundedIcon sx={{ fontSize: 22, color: "#ef4444" }} />
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
          mb: 0.75,
          color: "#111827",
        }}
      >
        {isNotFound ? "Location Not Found" : "Atmospheric Telemetry Error"}
      </Typography>

      <Typography
        variant="body2"
        sx={{ maxWidth: 440, mx: "auto", mb: 3, fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.6 }}
      >
        {message || "Unable to retrieve meteorological data for this query."}
      </Typography>

      <Stack
        direction="row"
        spacing={1.5}
        justifyContent="center"
        alignItems="center"
      >
        {onRetry && (
          <Button
            variant="contained"
            size="small"
            startIcon={<RefreshRoundedIcon sx={{ fontSize: 16 }} />}
            onClick={onRetry}
            sx={{ px: 3, py: 0.85, borderRadius: 9999, backgroundColor: "#111827", color: "#ffffff" }}
          >
            Retry
          </Button>
        )}

        {onDefaultSearch && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => onDefaultSearch("Bengaluru")}
            sx={{ px: 3, py: 0.85, borderRadius: 9999 }}
          >
            Load Bengaluru
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default React.memo(ErrorState);
