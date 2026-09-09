import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const QUICK_LOCATIONS = ["Bengaluru", "Mumbai", "Delhi", "London", "Tokyo", "New York"];

/**
 * SearchBar Component
 * Minimalist, high-end SaaS input field for location queries.
 */
const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || loading) return;
    onSearch(trimmed);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleClear = () => {
    setQuery("");
  };

  const handleQuickLocation = (cityName) => {
    setQuery(cityName);
    onSearch(cityName);
  };

  return (
    <Box sx={{ width: "100%", mb: { xs: 3, sm: 4 } }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          p: "6px 8px",
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: "9999px", // Clean pill search input
          border: "1px solid rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
          transition: "border-color 0.15s ease, box-shadow 0.15s ease",
          "&:focus-within": {
            borderColor: "#111827",
            boxShadow: "0 0 0 2px rgba(17, 24, 39, 0.08)",
          },
        }}
      >
        <SearchRoundedIcon
          sx={{
            color: "#6b7280",
            fontSize: 20,
            ml: 1.5,
          }}
        />

        <TextField
          id="vayu-city-search"
          fullWidth
          variant="standard"
          placeholder="Search for any city (e.g. Bengaluru, London, Tokyo)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          autoComplete="off"
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: { xs: "0.88rem", sm: "0.92rem" },
              fontWeight: 400,
              color: "#111827",
            },
            endAdornment: query && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  aria-label="Clear search text"
                  onClick={handleClear}
                  edge="end"
                  sx={{ color: "#9ca3af", p: 0.5, mr: 0.5 }}
                >
                  <ClearRoundedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={!query.trim() || loading}
          aria-label="Submit search"
          sx={{
            minWidth: { xs: "72px", sm: "88px" },
            py: 0.8,
            px: 2.5,
            fontSize: "0.82rem",
            fontWeight: 500,
            borderRadius: 9999,
            backgroundColor: "#111827",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#273142",
            },
          }}
        >
          {loading ? <CircularProgress size={16} color="inherit" /> : "Search"}
        </Button>
      </Paper>

      {/* Suggested Location Chips */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: 1.5,
          overflowX: "auto",
          py: 0.25,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {QUICK_LOCATIONS.map((cityName) => (
          <Chip
            key={cityName}
            label={cityName}
            size="small"
            clickable
            onClick={() => handleQuickLocation(cityName)}
            disabled={loading}
            sx={{
              fontSize: "0.78rem",
              fontWeight: 500,
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              color: "#4b5563",
              "&:hover": {
                borderColor: "#111827",
                color: "#111827",
                backgroundColor: "rgba(0, 0, 0, 0.03)",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default React.memo(SearchBar);
