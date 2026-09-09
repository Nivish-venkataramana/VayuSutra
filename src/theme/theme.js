import { createTheme } from "@mui/material/styles";

/**
 * VayuSutra Pure Light Mode Theme
 * Inspired by high-end financial SaaS design (Tidal, Linear, Stripe).
 *
 * Palette:
 * - Deep Charcoal / Navy: #111827 / #0B1D3A (Primary text & Dark CTA pills)
 * - Cloud White / Off-White: #ffffff / #fcfcfd (Surfaces & Backgrounds)
 * - Teal / Emerald: #059669 (Live status / Positive delta)
 * - Air Cyan: #0284c7 / #38E1FF (Accent thread & wind indicators)
 * - Muted Slate: #64748b (Secondary text & subtle borders)
 */
export const createAppTheme = () => {
  return createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#111827",
        light: "#374151",
        dark: "#000000",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#059669",
        light: "#34d399",
        dark: "#047857",
      },
      background: {
        default: "#ffffff",
        paper: "#ffffff",
      },
      text: {
        primary: "#111827",
        secondary: "#6b7280",
      },
      divider: "rgba(0, 0, 0, 0.07)",
      action: {
        hover: "rgba(0, 0, 0, 0.03)",
      },
    },
    typography: {
      fontFamily: '"Manrope", "Plus Jakarta Sans", "Outfit", -apple-system, BlinkMacSystemFont, sans-serif',
      h1: {
        fontFamily: '"Manrope", sans-serif',
        fontWeight: 500,
        letterSpacing: "-0.04em",
        lineHeight: 1.1,
      },
      h2: {
        fontFamily: '"Manrope", sans-serif',
        fontWeight: 500,
        letterSpacing: "-0.03em",
      },
      h3: {
        fontFamily: '"Manrope", sans-serif',
        fontWeight: 500,
        letterSpacing: "-0.02em",
      },
      h4: {
        fontWeight: 500,
        letterSpacing: "-0.02em",
      },
      h5: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      h6: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      subtitle1: {
        fontWeight: 500,
        letterSpacing: "-0.01em",
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: "0.85rem",
      },
      body1: {
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#4b5563",
      },
      body2: {
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#6b7280",
      },
      caption: {
        fontWeight: 500,
        letterSpacing: "0.04em",
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
        letterSpacing: "-0.01em",
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#ffffff",
            color: "#111827",
            minHeight: "100vh",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            borderRadius: 16,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 9999, // Pill shape like reference
            padding: "8px 20px",
            fontSize: "0.875rem",
            boxShadow: "none",
            transition: "all 0.15s ease",
            "&:hover": {
              boxShadow: "none",
            },
          },
          contained: {
            backgroundColor: "#111827",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#273142",
            },
          },
          outlined: {
            borderColor: "rgba(0, 0, 0, 0.12)",
            color: "#111827",
            "&:hover": {
              borderColor: "#111827",
              backgroundColor: "rgba(0, 0, 0, 0.02)",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 9999,
            transition: "all 0.15s ease",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 9999,
            fontWeight: 500,
            fontSize: "0.78rem",
            height: 28,
            transition: "all 0.15s ease",
          },
        },
      },
    },
  });
};
