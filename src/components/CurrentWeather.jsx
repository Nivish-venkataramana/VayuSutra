import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import WeatherIcon from "./WeatherIcon";
import {
  formatDate,
  capitalizeWords,
  formatVisibility,
  formatTime,
  formatWindDirection,
} from "../utils/weatherUtils";

/**
 * CurrentWeather Component
 * 
 * Recreates the exact high-end SaaS layout of the Tidal/Linear design reference:
 * - Left: Editorial typography, live pill badge, callout subtitle, action pills, and 3 key metrics.
 * - Right: Soft mint/cyan sculptural fluid canvas with floating glassmorphic weather cards.
 */
const CurrentWeather = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather || !weather.weather[0]) {
    return null;
  }

  const cityName = weather.name;
  const countryCode = weather.sys?.country;
  const temp = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const tempMin = Math.round(weather.main.temp_min);
  const tempMax = Math.round(weather.main.temp_max);
  const conditionMain = weather.weather[0].main;
  const conditionDescription = capitalizeWords(weather.weather[0].description);
  const iconCode = weather.weather[0].icon;

  const humidity = `${weather.main.humidity ?? "--"}%`;
  const windSpeed = `${weather.wind?.speed ?? "--"} m/s`;
  const windDir = formatWindDirection(weather.wind?.deg);
  const pressure = `${weather.main.pressure ?? "--"} hPa`;
  const visibility = formatVisibility(weather.visibility);
  const sunrise = formatTime(weather.sys?.sunrise, weather.timezone);
  const sunset = formatTime(weather.sys?.sunset, weather.timezone);
  const formattedDate = formatDate(weather.dt, weather.timezone);

  return (
    <Box sx={{ mb: { xs: 5, sm: 7 }, pt: 1 }}>
      <Grid container spacing={{ xs: 4, md: 5, lg: 6 }} alignItems="center">
        {/* ================= LEFT COLUMN ================= */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 520 }}>
            {/* Live Status Pill Badge */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.5 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.75,
                  py: 0.6,
                  borderRadius: 9999,
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
                }}
              >
                <Chip
                  label="Live"
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    backgroundColor: "rgba(5, 150, 105, 0.1)",
                    color: "#059669",
                    borderRadius: 9999,
                    px: 0.25,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#374151",
                  }}
                >
                  {cityName}
                  {countryCode ? `, ${countryCode}` : ""} &bull; {conditionMain}
                </Typography>
              </Box>
            </Stack>

            {/* Large Editorial Headline */}
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: { xs: "2.6rem", sm: "3.4rem", lg: "3.8rem" },
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#111827",
                mb: 2.5,
              }}
            >
              Atmospheric telemetry, <br />
              always in motion.
            </Typography>

            {/* Subtitle description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.6,
                color: "#6b7280",
                mb: 3.5,
                maxWidth: 460,
              }}
            >
              VayuSutra is the real-time meteorological intelligence platform for {cityName} —
              providing live temperature tracking, barometric pressure, and atmospheric velocity.
            </Typography>

            {/* CTA Actions */}
            <Stack direction="row" alignItems="center" spacing={2.5} sx={{ mb: 5 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  borderRadius: 9999,
                  px: 3.5,
                  py: 1.2,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#273142",
                  },
                }}
              >
                {cityName}: {temp}°C
              </Button>

              <Typography
                component="span"
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#111827",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  transition: "color 0.15s ease",
                  "&:hover": { color: "#059669" },
                }}
              >
                {conditionDescription} &rarr;
              </Typography>
            </Stack>

            {/* Bottom 3 Summary Stats */}
            <Grid container spacing={2} sx={{ pt: 2, borderTop: "1px solid rgba(0, 0, 0, 0.06)" }}>
              <Grid item xs={4}>
                <Typography variant="caption" sx={{ color: "#9ca3af", fontSize: "0.74rem", display: "block", mb: 0.5 }}>
                  Humidity level
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.15rem", color: "#111827", letterSpacing: "-0.02em" }}>
                  {humidity}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="caption" sx={{ color: "#9ca3af", fontSize: "0.74rem", display: "block", mb: 0.5 }}>
                  Wind velocity
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.15rem", color: "#111827", letterSpacing: "-0.02em" }}>
                  {windSpeed}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="caption" sx={{ color: "#9ca3af", fontSize: "0.74rem", display: "block", mb: 0.5 }}>
                  Barometer
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.15rem", color: "#111827", letterSpacing: "-0.02em" }}>
                  {pressure}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* ================= RIGHT COLUMN (TIDAL-STYLE SCULPTURAL VISUAL) ================= */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 520,
              aspectRatio: { xs: "1 / 1", sm: "1.05 / 1" },
              mx: "auto",
              borderRadius: "28px",
              // Organic seafoam / mint / sky fluid gradient container directly inspired by the reference
              background: "radial-gradient(circle at 75% 30%, #a7f3d0 0%, #6ee7b7 25%, #bae6fd 60%, #e0f2fe 100%)",
              boxShadow: "0 20px 50px rgba(110, 231, 183, 0.25), 0 4px 20px rgba(0, 0, 0, 0.04)",
              p: { xs: 2.5, sm: 3.5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            {/* Fluid Organic Ambient Swirl Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 35% 65%, rgba(56, 189, 248, 0.35) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />

            {/* Floating Card 1 (Top Left) */}
            <Paper
              elevation={0}
              sx={{
                width: { xs: "85%", sm: "75%" },
                p: { xs: 2, sm: 2.5 },
                borderRadius: "18px",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                zIndex: 2,
                position: "relative",
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="caption" sx={{ color: "#6b7280", fontWeight: 500, fontSize: "0.75rem" }}>
                  Telemetry &bull; Celsius
                </Typography>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#059669" }} />
                  <Typography variant="caption" sx={{ color: "#059669", fontWeight: 600, fontSize: "0.72rem" }}>
                    Live
                  </Typography>
                </Stack>
              </Stack>

              {/* Big Main Temperature */}
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "2.2rem", sm: "2.6rem" },
                  letterSpacing: "-0.04em",
                  color: "#111827",
                  lineHeight: 1.1,
                }}
              >
                {temp}°<span style={{ fontSize: "1.4rem", color: "#6b7280", fontWeight: 400 }}>C</span>
              </Typography>

              {/* Feels Like in Emerald */}
              <Typography
                variant="body2"
                sx={{
                  color: "#059669",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  mt: 0.5,
                  mb: 1.5,
                }}
              >
                Feels like {feelsLike}°C today
              </Typography>

              <Stack direction="row" justifyContent="space-between" sx={{ pt: 1, borderTop: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <Typography variant="caption" sx={{ color: "#6b7280", fontSize: "0.74rem" }}>
                  Visibility: {visibility}
                </Typography>
                <Typography variant="caption" sx={{ color: "#111827", fontWeight: 600, fontSize: "0.74rem" }}>
                  Bearing {windDir}
                </Typography>
              </Stack>
            </Paper>

            {/* Bottom Row inside Canvas */}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ zIndex: 2, position: "relative" }}>
              {/* Floating Pill (Bottom Left) */}
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 9999,
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  fontSize: "0.76rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                }}
              >
                H {tempMax}°C &bull; L {tempMin}°C
              </Box>

              {/* Floating Card 2 (Bottom Right) */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <WeatherIcon icon={iconCode} description={conditionDescription} size={48} />
                <Box>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#059669" }} />
                    <Typography variant="caption" sx={{ color: "#111827", fontWeight: 600, fontSize: "0.76rem" }}>
                      {conditionMain}
                    </Typography>
                  </Stack>
                  <Typography variant="caption" sx={{ color: "#6b7280", fontSize: "0.72rem", display: "block" }}>
                    Dawn {sunrise} &bull; Dusk {sunset}
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(CurrentWeather);
