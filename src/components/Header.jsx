import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

/**
 * Header Component
 * Minimalist navbar modeled directly after the reference SaaS header.
 */
const Header = ({ onRefresh, loading, lastUpdated }) => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        mb: { xs: 3, sm: 5 },
        px: { xs: 0, sm: 1 },
      }}
    >
      {/* Brand: ~ VayuSutra */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: "1.1rem",
            letterSpacing: "-0.03em",
            color: "#111827",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <span style={{ color: "#059669", fontWeight: 700 }}>~</span>
          <span>vayu</span>
          <span style={{ color: "#6b7280", fontWeight: 400, fontSize: "0.95rem" }}>sutra</span>
        </Typography>
      </Stack>

      {/* Center Nav Links (Hidden on small mobile) */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={4}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.86rem",
            fontWeight: 500,
            color: "#111827",
            cursor: "pointer",
            letterSpacing: "-0.01em",
          }}
        >
          Live Weather
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.86rem",
            fontWeight: 400,
            color: "#6b7280",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            transition: "color 0.15s ease",
            "&:hover": { color: "#111827" },
          }}
        >
          Atmosphere
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.86rem",
            fontWeight: 400,
            color: "#6b7280",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            transition: "color 0.15s ease",
            "&:hover": { color: "#111827" },
          }}
        >
          Telemetry
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.86rem",
            fontWeight: 400,
            color: "#6b7280",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            transition: "color 0.15s ease",
            "&:hover": { color: "#111827" },
          }}
        >
          Cities
        </Typography>
      </Stack>

      {/* Right Controls: Timestamp & Pill Refresh Button */}
      <Stack direction="row" alignItems="center" spacing={2}>
        {lastUpdated && (
          <Typography
            variant="caption"
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: "0.8rem",
              color: "#6b7280",
              fontWeight: 400,
            }}
          >
            {lastUpdated}
          </Typography>
        )}

        {/* Minimalist Pill Button */}
        <Tooltip title="Refresh real-time telemetry">
          <Button
            variant="outlined"
            size="small"
            onClick={onRefresh}
            disabled={loading}
            startIcon={
              <RefreshRoundedIcon
                sx={{
                  fontSize: 16,
                  animation: loading ? "weather-spin 1s linear infinite" : "none",
                }}
              />
            }
            sx={{
              borderRadius: 9999,
              borderColor: "rgba(0, 0, 0, 0.12)",
              color: "#111827",
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              fontSize: "0.82rem",
              px: 2,
              py: 0.6,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderColor: "#111827",
              },
            }}
          >
            Refresh
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default React.memo(Header);
