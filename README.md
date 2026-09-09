# 🌤️ VayuSutra — Atmospheric Intelligence Dashboard

<div align="center">

```
  ____   __  __   ____   __  __  ____   _   _  _____  ____      _   
 / ___| / /  \ \ |  _ \ / /  \ \|  _ \ | | | ||_   _||  _ \    / \  
| |    / / /\ \ \| |_) | / /\ \ | |_) || | | |  | |  | |_) |  / _ \ 
| |___ \ \ \/ / /|  __/ \ \/ / /|  _ < | |_| |  | |  |  _ <  / ___ \
 \____| \ \__/ / |_|     \__/ / |_| \_\ \___/   |_|  |_| \_\/_/   \_\
         \____/           \____/                                     
```

**A modern, minimalist, editorial weather application built with React 19, Vite, and Material UI.**  
*Powered by the official OpenWeatherMap Current Weather API.*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/Material_UI-v7-007FFF?style=flat-square&logo=mui&logoColor=white)](https://mui.com/)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API_v2.5-EB6E4B?style=flat-square&logo=openweathermap&logoColor=white)](https://openweathermap.org/api)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Design Philosophy](#-design-philosophy)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [API Integration & Data Mapping](#-api-integration--data-mapping)
- [Installation & Quick Start](#-installation--quick-start)
- [Environment Configuration](#-environment-configuration)
- [Component Breakdown](#-component-breakdown)
- [Testing Checklist](#-testing-checklist)
- [License](#-license)

---

## 🌟 Overview

**VayuSutra** (from *Vayu* — Wind/Atmosphere, and *Sutra* — Principle/Thread) is a production-grade weather dashboard designed with an **editorial, high-end SaaS aesthetic** inspired by platforms like Tidal, Linear, and Stripe.

Unlike traditional consumer weather apps that rely on heavy glassmorphism, bright neon gradients, and cartoon graphics, VayuSutra uses **restrained typography, generous whitespace, organic sculptural visual canvases, and precise meteorological indicators**.

---

## 🎨 Design Philosophy

| Principle | Implementation |
| :--- | :--- |
| **Editorial Layout** | Asymmetric hero section featuring large-scale temperature typography (`84px+`, `font-weight: 400`) and tight tracking (`-0.05em`). |
| **Sculptural Canvas** | Organic mint, seafoam, and cyan fluid gradient container with floating glassmorphic telemetry cards. |
| **Pure Light Mode** | Clean, crisp, high-contrast surfaces (`#ffffff`, `#111827`, `#6b7280`) with emerald (`#059669`) live indicator accents. |
| **Micro-Interactions** | Restrained hover elevations (`translateY(-1px)`), subtle pill focus rings, and smooth rotating refresh animations. |
| **Zero Layout Shift** | Skeleton loading placeholders matching the exact card dimensions and typography heights. |

---

## ✨ Key Features

- **☀️ Real-Time Weather Intelligence:** Instant live telemetry for temperature, feels-like, and daily high/low extremes.
- **🖼️ Official OpenWeatherMap Icons:** High-resolution condition iconography fetched directly from `https://openweathermap.org/img/wn/${icon}@2x.png`.
- **📊 6 Core Meteorological Indicators:**
  - **Humidity Level:** Relative moisture percentage and comfort index.
  - **Wind Velocity & Bearing:** Speed in meters/second accompanied by an 8-point compass needle (`N, NE, E, SE, S, SW, W, NW`).
  - **Atmospheric Barometer:** Surface pressure measured in `hPa`.
  - **Visibility Index:** Optical visibility range converted cleanly to kilometers (`km`).
  - **Sunrise & Sunset:** Localized dawn and dusk times calculated using city timezone offsets.
- **🔍 Low-Profile Pill Search Bar:** Fast city search supporting `Enter` key execution, input clear button, and quick-access chips.
- **🌐 Global Hubs Ticker:** One-click telemetry switching across major cities (*Bengaluru, Mumbai, London, Tokyo, New York, Singapore, San Francisco*).
- **🔄 Silent Refresh Action:** Re-fetches the active location's metrics on demand with a feedback toast notification.
- **🛡️ Graceful Error Handling:** Dedicated user-friendly alerts for 404 (city not found), 401 (API key propagation), 429 (rate limiting), and network timeouts.

---

## 🛠️ Tech Stack

- **Frontend Core:** [React 19](https://react.dev/) + [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Design System & Components:** [Material UI (MUI v7)](https://mui.com/) + [@emotion/react](https://emotion.sh/) + [@emotion/styled](https://emotion.sh/)
- **Icons:** [@mui/icons-material](https://mui.com/material-ui/material-icons/)
- **Typography:** [Manrope](https://fonts.google.com/specimen/Manrope) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **API Communication:** Native `fetch()` API
- **Data Provider:** [OpenWeatherMap Current Weather API](https://openweathermap.org/api)

---

## 📁 Project Architecture

```text
weather-widget/
├── public/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx    # Editorial hero section & sculptural fluid canvas
│   │   ├── ErrorState.jsx        # Muted error banner with retry triggers
│   │   ├── Header.jsx            # Minimalist brand navbar & refresh button
│   │   ├── LoadingState.jsx      # Skeleton placeholder layout (zero layout shift)
│   │   ├── SearchBar.jsx         # Pill search input with quick-location chips
│   │   ├── WeatherDetails.jsx    # 6 meteorological indicator blocks
│   │   └── WeatherIcon.jsx       # OpenWeatherMap official 2x icon image
│   ├── services/
│   │   └── weatherService.js     # API service (/data/2.5/weather)
│   ├── theme/
│   │   └── theme.js              # Custom Material UI Light Theme definition
│   ├── utils/
│   │   └── weatherUtils.js       # Date/time formatters, compass & visibility helpers
│   ├── App.jsx                   # Application root, state & hubs ticker
│   ├── index.css                 # Base resets, custom scrollbars & keyframe animations
│   └── main.jsx                  # React DOM root entry
├── .env                          # Local environment variables
├── .env.example                  # Environment variable template
├── .gitignore                    # Git ignore file (excludes .env)
├── index.html                    # HTML document with Google Fonts
├── package.json
└── README.md
```

---

## 📡 API Integration & Data Mapping

VayuSutra connects specifically to the **OpenWeatherMap Current Weather endpoint**:

```text
https://api.openweathermap.org/data/2.5/weather?q={CITY}&units=metric&appid={API_KEY}
```

### Exact Response Data Mapping

| UI Element | OpenWeatherMap Field | Example Value | Formatting |
| :--- | :--- | :--- | :--- |
| **City Name** | `weather.name` | `"Bengaluru"` | Raw string |
| **Country Code** | `weather.sys.country` | `"IN"` | Uppercase chip |
| **Temperature** | `weather.main.temp` | `28.4` | `Math.round()` &rarr; `28°C` |
| **Feels Like** | `weather.main.feels_like` | `29.1` | `Math.round()` &rarr; `29°C` |
| **High Temperature** | `weather.main.temp_max` | `30.2` | `Math.round()` &rarr; `30°C` |
| **Low Temperature** | `weather.main.temp_min` | `22.0` | `Math.round()` &rarr; `22°C` |
| **Condition Title** | `weather.weather[0].main` | `"Clear"` | Capitalized |
| **Condition Description**| `weather.weather[0].description` | `"clear sky"` | Title Case |
| **Weather Icon** | `weather.weather[0].icon` | `"01d"` | `https://openweathermap.org/img/wn/01d@2x.png` |
| **Humidity** | `weather.main.humidity` | `62` | `62%` |
| **Wind Speed** | `weather.wind.speed` | `3.5` | `3.5 m/s` |
| **Wind Bearing** | `weather.wind.deg` | `120` | Degrees converted to `SE` |
| **Barometer** | `weather.main.pressure` | `1012` | `1012 hPa` |
| **Visibility** | `weather.visibility` | `10000` | Meters &rarr; `(10000 / 1000).toFixed(1)` &rarr; `10.0 km` |
| **Sunrise** | `weather.sys.sunrise` | `1725849000` | Unix timestamp &rarr; `"06:02 AM"` |
| **Sunset** | `weather.sys.sunset` | `1725893000` | Unix timestamp &rarr; `"06:24 PM"` |

---

## ⚡ Installation & Quick Start

### 1. Clone or Open the Workspace
Open your terminal or PowerShell in the project directory:

```powershell
cd c:\Users\nivis\OneDrive\Desktop\Mini-Projects\Weather_Widget
```

### 2. Install Project Dependencies
```powershell
npm install
```

### 3. Launch Development Server
```powershell
npm run dev
```

The application will start immediately at:  
👉 **`http://localhost:5173/`**

---

## 🔐 Environment Configuration

Create a `.env` file in the root directory (or use the existing one):

```env
# OpenWeatherMap API Key
# Sign up and retrieve a free key at: https://openweathermap.org/api
VITE_WEATHER_API_KEY=f9ec16280992e2fbd6ce9dae5639699c
```

> [!IMPORTANT]
> **Vite Server Restart Required:** Vite reads `.env` files upon server initialization. If you modify `.env`, restart the development server (`Ctrl + C`, then `npm run dev`).

### Verifying Your API Key Directly

You can verify the API key directly in your browser:
```text
https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&units=metric&appid=f9ec16280992e2fbd6ce9dae5639699c
```
* **Status 200:** Key is active and streaming live data.
* **Status 401:** Key is newly created and propagating across OpenWeatherMap servers (takes 10–60 minutes).

---

## 🧩 Component Breakdown

### 1. `src/App.jsx`
* Central orchestrator managing state: `city`, `weather`, `loading`, `error`, and `lastUpdated`.
* Provides Material UI's `ThemeProvider` and `CssBaseline`.
* Renders the global hub ticker bar and feedback `Snackbar` toasts.

### 2. `src/components/CurrentWeather.jsx`
* **Left Column:** Live status indicator, headline typography, subtitle, primary CTA button, and 3 key metrics (`Humidity`, `Wind velocity`, `Barometer`).
* **Right Column:** Sculptural mint/seafoam canvas container with floating glassmorphic weather cards displaying large hero temperature (`28°C`), feels-like, visibility, daylight cycle, and official icon.

### 3. `src/components/WeatherDetails.jsx`
* Renders a responsive 6-item grid of minimal indicator tiles with thin borders, muted SVG icons, and formatted meteorological values.

### 4. `src/components/SearchBar.jsx`
* Pill-shaped search bar with `Enter` key submission, clear icon, loading spinner, and quick city selection chips.

### 5. `src/components/Header.jsx`
* Minimal navbar with `~ vayusutra` brand wordmark, subtle navigation links (`Live Weather`, `Atmosphere`, `Telemetry`, `Cities`), and a rounded pill refresh button.

### 6. `src/components/LoadingState.jsx` & `src/components/ErrorState.jsx`
* Layout-matched skeleton placeholders that eliminate layout shifting during data fetches.
* Muted error alert with retry and fallback search triggers.

---

## 🧪 Testing Checklist

- [x] **Initial Boot:** Default city (`Bengaluru`) loads automatically on application start.
- [x] **Search Execution:** Search queries execute on `Enter` key or clicking the Search button.
- [x] **Clear Query:** Clear button removes text and resets the input adornment.
- [x] **Quick Cities:** Clicking any city chip or bottom hub link loads its telemetry immediately.
- [x] **Live Refresh:** Re-fetches the active city and displays a feedback toast notification.
- [x] **Error Handling:** Invalid city queries display a clean "Location Not Found" card with retry actions.
- [x] **Zero Production Errors:** Verified via `npm run build` with clean bundle compilation.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  <sub>Crafted with React, Material UI, and OpenWeatherMap Telemetry.</sub>
</div>
