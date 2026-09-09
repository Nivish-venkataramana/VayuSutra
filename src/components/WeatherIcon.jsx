import React from "react";
import Box from "@mui/material/Box";

/**
 * WeatherIcon Component
 * Renders the official OpenWeatherMap icon within a restrained ambient visual frame.
 *
 * @param {object} props
 * @param {string} props.icon - OpenWeatherMap icon identifier
 * @param {string} props.description - Accessibility description
 * @param {number} [props.size=110] - Dimensions in pixels
 */
const WeatherIcon = ({ icon = "01d", description = "Current weather condition", size = 110 }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <img
        src={iconUrl}
        alt={description}
        width={size}
        height={size}
        style={{
          objectFit: "contain",
          display: "block",
          filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.12))",
        }}
        loading="eager"
      />
    </Box>
  );
};

export default React.memo(WeatherIcon);
