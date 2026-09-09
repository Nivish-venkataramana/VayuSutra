import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import { formatWindDirection, formatVisibility, formatTime } from "../utils/weatherUtils";

/**
 * MetricBlock Component
 */
const MetricBlock = ({ label, value, subtext, icon, extra = null }) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 2.25, sm: 2.75 },
      borderRadius: "16px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#ffffff",
      border: "1px solid rgba(0, 0, 0, 0.07)",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
      transition: "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",
      "&:hover": {
        borderColor: "#111827",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
        transform: "translateY(-1px)",
      },
    }}
  >
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
      <Typography
        variant="caption"
        sx={{
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#9ca3af",
          fontSize: "0.72rem",
        }}
      >
        {label}
      </Typography>
      <Box sx={{ color: "#6b7280", display: "flex", alignItems: "center" }}>{icon}</Box>
    </Stack>

    <Box>
      <Stack direction="row" alignItems="baseline" spacing={1}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.2rem", sm: "1.35rem" },
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: "#111827",
          }}
        >
          {value}
        </Typography>
        {extra}
      </Stack>

      {subtext && (
        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 0.75,
            fontWeight: 400,
            fontSize: "0.78rem",
            color: "#6b7280",
          }}
        >
          {subtext}
        </Typography>
      )}
    </Box>
  </Paper>
);

/**
 * WeatherDetails Component
 * 
 * Clean 6-metric information grid:
 * 1. Humidity (weather.main.humidity)
 * 2. Wind Velocity & Bearing (weather.wind.speed & weather.wind.deg)
 * 3. Atmospheric Pressure (weather.main.pressure)
 * 4. Visibility Range (weather.visibility)
 * 5. Sunrise Daylight (weather.sys.sunrise)
 * 6. Sunset Dusk (weather.sys.sunset)
 */
const WeatherDetails = ({ weather }) => {
  if (!weather || !weather.main) return null;

  const humidity = `${weather.main.humidity ?? "--"}%`;
  const windSpeed = `${weather.wind?.speed ?? "--"} m/s`;
  const windDir = formatWindDirection(weather.wind?.deg);
  const pressure = `${weather.main.pressure ?? "--"} hPa`;
  const visibility = formatVisibility(weather.visibility);
  const sunrise = formatTime(weather.sys?.sunrise, weather.timezone);
  const sunset = formatTime(weather.sys?.sunset, weather.timezone);

  return (
    <Box sx={{ mb: { xs: 5, sm: 6 } }}>
      <Typography
        variant="caption"
        sx={{
          display: "block",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 600,
          color: "#9ca3af",
          fontSize: "0.74rem",
          mb: 2,
        }}
      >
        Meteorological Indicators
      </Typography>

      <Grid container spacing={2.5}>
        {/* 1. Humidity */}
        <Grid item xs={6} sm={4}>
          <MetricBlock
            label="Humidity"
            value={humidity}
            subtext={weather.main.humidity > 60 ? "Elevated moisture index" : "Optimal comfort level"}
            icon={<WaterDropOutlinedIcon sx={{ fontSize: 18 }} />}
          />
        </Grid>

        {/* 2. Wind Speed & Direction */}
        <Grid item xs={6} sm={4}>
          <MetricBlock
            label="Wind Velocity"
            value={windSpeed}
            subtext={`Bearing: ${windDir}`}
            icon={<AirOutlinedIcon sx={{ fontSize: 18 }} />}
            extra={
              weather.wind?.deg !== undefined && (
                <NavigationRoundedIcon
                  sx={{
                    fontSize: 13,
                    color: "#059669",
                    transform: `rotate(${weather.wind.deg}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                />
              )
            }
          />
        </Grid>

        {/* 3. Pressure */}
        <Grid item xs={6} sm={4}>
          <MetricBlock
            label="Barometer"
            value={pressure}
            subtext="Atmospheric standard"
            icon={<CompressOutlinedIcon sx={{ fontSize: 18 }} />}
          />
        </Grid>

        {/* 4. Visibility */}
        <Grid item xs={6} sm={4}>
          <MetricBlock
            label="Visibility"
            value={visibility}
            subtext={weather.visibility >= 10000 ? "Clear horizon index" : "Moderate distance"}
            icon={<VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
          />
        </Grid>

        {/* 5. Sunrise */}
        <Grid item xs={6} sm={4}>
          <MetricBlock
            label="Sunrise"
            value={sunrise}
            subtext="First daylight dawn"
            icon={<WbTwilightOutlinedIcon sx={{ fontSize: 18 }} />}
          />
        </Grid>

        {/* 6. Sunset */}
        <Grid item xs={6} sm={4}>
          <MetricBlock
            label="Sunset"
            value={sunset}
            subtext="Evening dusk twilight"
            icon={<NightlightOutlinedIcon sx={{ fontSize: 18 }} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(WeatherDetails);
