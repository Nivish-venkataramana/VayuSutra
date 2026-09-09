import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

/**
 * LoadingState Component
 * Layout-matching skeleton for the Tidal-style layout.
 */
const LoadingState = () => {
  return (
    <Box sx={{ width: "100%", animation: "fadeIn 0.25s ease", mb: 6 }}>
      <Grid container spacing={{ xs: 4, md: 5, lg: 6 }} alignItems="center" sx={{ mb: 6 }}>
        {/* Left Column Skeleton */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 520 }}>
            <Skeleton variant="rounded" width={220} height={32} sx={{ borderRadius: 9999, mb: 3 }} />
            <Skeleton variant="text" width="90%" height={56} sx={{ borderRadius: 2 }} />
            <Skeleton variant="text" width="75%" height={56} sx={{ borderRadius: 2, mb: 2 }} />
            <Skeleton variant="text" width="100%" height={24} sx={{ borderRadius: 1 }} />
            <Skeleton variant="text" width="80%" height={24} sx={{ borderRadius: 1, mb: 4 }} />
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <Skeleton variant="rounded" width={140} height={42} sx={{ borderRadius: 9999 }} />
              <Skeleton variant="rounded" width={140} height={42} sx={{ borderRadius: 9999 }} />
            </Stack>
          </Box>
        </Grid>

        {/* Right Column Canvas Skeleton */}
        <Grid item xs={12} md={6}>
          <Skeleton
            variant="rounded"
            sx={{
              width: "100%",
              maxWidth: 520,
              aspectRatio: { xs: "1 / 1", sm: "1.05 / 1" },
              borderRadius: "28px",
              mx: "auto",
            }}
          />
        </Grid>
      </Grid>

      {/* 6 Metric Block Skeletons */}
      <Grid container spacing={2.5}>
        {[...Array(6)].map((_, i) => (
          <Grid item xs={6} sm={4} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 2.75,
                borderRadius: "16px",
                height: 120,
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Skeleton variant="text" width="40%" height={16} />
                <Skeleton variant="circular" width={18} height={18} />
              </Stack>
              <Skeleton variant="text" width="60%" height={32} />
              <Skeleton variant="text" width="45%" height={16} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(LoadingState);
