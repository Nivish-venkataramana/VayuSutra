import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { createAppTheme } from "./theme/theme";
import { getWeather } from "./services/weatherService";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";

const DEFAULT_CITY = "Bengaluru";
const GLOBAL_HUBS = ["Bengaluru", "Mumbai", "London", "Tokyo", "New York", "Singapore", "San Francisco"];

function App() {
  // Pure Light Mode Material UI Theme
  const muiTheme = useMemo(() => createAppTheme(), []);

  // Weather application state
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  // Feedback notification
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  // Fetch weather data for given city name
  const fetchWeather = useCallback(async (cityName, isSilent = false) => {
    if (!isSilent) {
      setLoading(true);
    }
    setError("");

    try {
      const data = await getWeather(cityName);
      setWeather(data);
      setCity(data.name);

      const timeString = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });
      setLastUpdated(timeString);

      if (isSilent) {
        setToast({
          open: true,
          message: `Atmospheric telemetry refreshed for ${data.name}`,
          severity: "success",
        });
      }
    } catch (err) {
      console.error("[VayuSutra] Error fetching telemetry:", err);
      setError(err.message || "Failed to retrieve meteorological data.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load on mount
  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]);

  // Refresh handler
  const handleRefresh = useCallback(() => {
    if (city) {
      fetchWeather(city, true);
    }
  }, [city, fetchWeather]);

  const handleCloseToast = (_, reason) => {
    if (reason === "clickaway") return;
    setToast((prev) => ({ ...prev, open: false }));
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          color: "#111827",
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1200px !important",
            px: { xs: 0, sm: 1 },
            display: "flex",
            flexDirection: "column",
            flex: 1,
            mx: "auto",
          }}
        >
          {/* Top Header Navbar */}
          <Header
            onRefresh={handleRefresh}
            loading={loading}
            lastUpdated={lastUpdated}
          />

          {/* Minimalist Location Search Bar */}
          <SearchBar onSearch={(query) => fetchWeather(query)} loading={loading} />

          {/* Understated Error State */}
          {error && (
            <ErrorState
              message={error}
              onRetry={() => fetchWeather(city)}
              onDefaultSearch={() => fetchWeather(DEFAULT_CITY)}
            />
          )}

          {/* Loading Skeleton */}
          {loading && !weather && <LoadingState />}

          {/* Weather Content Presentation */}
          {!error && weather && (
            <Box
              sx={{
                opacity: loading ? 0.75 : 1,
                transition: "opacity 0.2s ease",
              }}
            >
              {/* Tidal-style Asymmetric Hero Card */}
              <CurrentWeather weather={weather} />

              {/* 6 Minimal Metric Blocks */}
              <WeatherDetails weather={weather} />
            </Box>
          )}

          {/* Reference-style Hubs Ticker Bar */}
          <Box
            sx={{
              pt: 4,
              pb: 2,
              mt: "auto",
              borderTop: "1px solid rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-between" },
              gap: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#9ca3af",
                fontWeight: 500,
                fontSize: "0.8rem",
              }}
            >
              Live meteorological telemetry at
            </Typography>

            <Stack
              direction="row"
              spacing={{ xs: 2, sm: 3.5 }}
              flexWrap="wrap"
              justifyContent="center"
              sx={{ gap: { xs: 1.5, sm: 2 } }}
            >
              {GLOBAL_HUBS.map((hub) => (
                <Typography
                  key={hub}
                  variant="body2"
                  onClick={() => fetchWeather(hub)}
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: hub === city ? "#111827" : "#6b7280",
                    cursor: "pointer",
                    transition: "color 0.15s ease",
                    "&:hover": { color: "#111827" },
                  }}
                >
                  {hub}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Container>

        {/* Minimal Footer */}
        <Box
          component="footer"
          sx={{
            textAlign: "center",
            py: 3,
            mt: 3,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 400,
              color: "#9ca3af",
              fontSize: "0.78rem",
            }}
          >
            VayuSutra &bull; Pure Light Edition &bull; OpenWeather Telemetry
          </Typography>
        </Box>

        {/* Global Toast Alert */}
        <Snackbar
          open={toast.open}
          autoHideDuration={3500}
          onClose={handleCloseToast}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseToast}
            severity={toast.severity}
            variant="filled"
            sx={{
              borderRadius: 9999,
              fontWeight: 500,
              fontSize: "0.85rem",
              backgroundColor: "#111827",
              color: "#ffffff",
              px: 2.5,
              py: 0.5,
            }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
