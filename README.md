# VayuSutra — Atmospheric Intelligence Dashboard

VayuSutra is a modern, minimalist weather application built with React, Vite, and Material UI. It provides real-time atmospheric information for cities using the OpenWeatherMap Current Weather API.

The application focuses on a clean editorial interface, responsive layouts, clear weather information, and a professional user experience.

---

## 1. Project Overview

VayuSutra is a real-time weather dashboard that allows users to search for cities and view their current atmospheric conditions.

The application retrieves live weather information from the OpenWeatherMap Current Weather API and presents the data through a carefully designed Material UI interface.

The application provides information such as:

- Current temperature
- Feels-like temperature
- Minimum temperature
- Maximum temperature
- Weather condition
- Weather description
- Weather icon
- Humidity
- Wind speed
- Wind direction
- Atmospheric pressure
- Visibility
- Sunrise time
- Sunset time

The application starts with Bengaluru as the default location and allows users to search for any supported city.

---

## 2. Design Philosophy

VayuSutra follows a minimalist editorial design approach rather than the traditional weather-dashboard style.

The interface focuses on:

- Generous whitespace
- Clear visual hierarchy
- Minimal typography
- Subtle borders
- Soft shadows
- Restrained colors
- Large temperature typography
- Clean weather visualizations
- Responsive layouts
- Simple and meaningful interactions

The design is inspired by modern SaaS applications where information is presented clearly without unnecessary visual complexity.

The goal is to make the weather information feel like a premium product rather than a basic API demonstration.

---

## 3. Key Features

### Real-Time Weather

The application retrieves current weather information directly from the OpenWeatherMap Current Weather API.

The displayed information is based on live API data rather than hardcoded weather values.

### City Search

Users can search for weather information by entering a city name.

The search supports:

- Search button interaction
- Enter key submission
- Empty input validation
- Clear input functionality
- Loading feedback
- Invalid city handling

### Default Location

When the application starts, it automatically loads weather information for:

```text
Bengaluru
