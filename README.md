# VayuSutra — Atmospheric Intelligence Dashboard

VayuSutra is a modern, minimalist weather application built with React, Vite, and Material UI. It provides real-time atmospheric information for cities using the OpenWeatherMap Current Weather API.

The application focuses on a clean editorial interface, responsive layouts, clear weather information, and a professional user experience.

---

## 1. Project Overview

VayuSutra is a real-time weather dashboard that allows users to search for cities and view their current atmospheric conditions.

The application retrieves live weather information from the OpenWeatherMap Current Weather API and presents the data through a carefully designed Material UI interface.

The application provides information such as:

* Current temperature
* Feels-like temperature
* Minimum temperature
* Maximum temperature
* Weather condition
* Weather description
* Weather icon
* Humidity
* Wind speed
* Wind direction
* Atmospheric pressure
* Visibility
* Sunrise time
* Sunset time

The application starts with Bengaluru as the default location and allows users to search for any supported city.

---

## 2. Design Philosophy

VayuSutra follows a minimalist editorial design approach rather than the traditional weather-dashboard style.

The interface focuses on:

* Generous whitespace
* Clear visual hierarchy
* Minimal typography
* Subtle borders
* Soft shadows
* Restrained colors
* Large temperature typography
* Clean weather visualizations
* Responsive layouts
* Simple and meaningful interactions

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

* Search button interaction
* Enter key submission
* Empty input validation
* Clear input functionality
* Loading feedback
* Invalid city handling

### Default Location

When the application starts, it automatically loads weather information for:

```text
Bengaluru
```

### Weather Information

The dashboard displays detailed atmospheric information, including:

* Temperature
* Feels-like temperature
* Minimum temperature
* Maximum temperature
* Weather condition
* Weather description
* Weather icon
* Humidity
* Wind speed
* Wind direction
* Atmospheric pressure
* Visibility
* Sunrise
* Sunset

### Responsive Design

The application is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile devices

The interface automatically adapts to different screen sizes while maintaining readability and usability.

### Loading and Error States

The application provides appropriate feedback while weather information is being retrieved.

It also handles situations such as:

* Invalid city names
* Empty search input
* API request failures
* Network errors
* Unavailable weather information

---

## 4. Technology Stack

### Frontend

* React
* JavaScript
* Vite
* Material UI

### API

* OpenWeatherMap Current Weather API

### Development Tools

* Node.js
* npm
* Visual Studio Code
* Git

---

## 5. Project Structure

The project follows a standard React and Vite structure.

```text
VayuSutra/
│
├── public/
│
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

The exact structure may vary depending on the implementation.

---

## 6. Prerequisites

Before running VayuSutra locally, make sure the following are installed on your system.

### Node.js

Verify the Node.js installation:

```powershell
node --version
```

### npm

Verify the npm installation:

```powershell
npm --version
```

Node.js includes npm, so installing Node.js is normally sufficient.

---

## 7. Run VayuSutra on Localhost

### Step 1: Open the Project

Open the VayuSutra project folder in Visual Studio Code.

Open the integrated terminal using:

```text
Terminal → New Terminal
```

---

### Step 2: Install Dependencies

Run the following command in the project directory:

```powershell
npm install
```

This installs all the dependencies required by the project.

---

### Step 3: Start the Development Server

Run:

```powershell
npm run dev
```

Vite will start the development server.

The terminal will display a local address similar to:

```text
http://localhost:5173/
```

---

### Step 4: Open the Application

Open the following address in your browser:

```text
http://localhost:5173
```

VayuSutra will now be running on your local machine.

The application will initially display weather information for Bengaluru.

---

## 8. Development Commands

### Install Dependencies

```powershell
npm install
```

### Start Development Server

```powershell
npm run dev
```

### Create Production Build

```powershell
npm run build
```

### Preview Production Build

```powershell
npm run preview
```

---

## 9. Production Build

To generate an optimized production version of the application, run:

```powershell
npm run build
```

The generated production files will be available in:

```text
dist/
```

To preview the production build locally, run:

```powershell
npm run preview
```

---

## 10. Localhost Access

Once the development server is running, the application can normally be accessed at:

```text
http://localhost:5173
```

If port `5173` is already being used by another application, Vite may automatically select another available port. The correct address will be displayed in the terminal.

---

## 11. Project Goal

The goal of VayuSutra is to demonstrate how a modern React application can use real-time weather data to create a clean, responsive, and professional user interface.

The project demonstrates practical frontend development concepts including:

* React component development
* API integration
* Asynchronous data handling
* User input handling
* State management
* Loading states
* Error handling
* Responsive design
* Material UI
* Vite development workflow

VayuSutra combines real-time atmospheric data with a minimalist interface to provide a simple and professional weather experience.
