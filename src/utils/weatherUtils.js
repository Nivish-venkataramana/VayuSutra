/**
 * Weather utility functions for formatting and condition helpers.
 */

/**
 * Converts wind direction degrees into 8-point compass directions.
 * @param {number} deg - Wind direction in degrees
 * @returns {string} Compass direction (e.g. N, NE, E, SE, S, SW, W, NW)
 */
export const formatWindDirection = (deg) => {
  if (deg === null || deg === undefined || isNaN(deg)) return "N/A";
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((deg % 360) / 45) % 8;
  return directions[index];
};

/**
 * Converts visibility in meters to kilometers.
 * @param {number} meters - Visibility in meters
 * @returns {string} Formatted visibility in km (e.g. "10.0 km")
 */
export const formatVisibility = (meters) => {
  if (meters === null || meters === undefined || isNaN(meters)) return "N/A";
  return `${(meters / 1000).toFixed(1)} km`;
};

/**
 * Formats Unix timestamp to 12-hour time string with city timezone offset.
 * @param {number} timestamp - Unix timestamp in seconds
 * @param {number} timezoneOffset - Timezone offset in seconds from UTC
 * @returns {string} Formatted time string (e.g. "06:02 AM")
 */
export const formatTime = (timestamp, timezoneOffset = 0) => {
  if (!timestamp) return "--:--";
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
};

/**
 * Formats Unix timestamp to full readable date (e.g. "Wednesday, September 9").
 * @param {number} timestamp - Unix timestamp in seconds
 * @param {number} timezoneOffset - Timezone offset in seconds
 * @returns {string}
 */
export const formatDate = (timestamp, timezoneOffset = 0) => {
  if (!timestamp) return "";
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};

/**
 * Capitalizes the first letter of words in a sentence.
 * @param {string} text
 * @returns {string}
 */
export const capitalizeWords = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Returns a sophisticated, minimalist atmospheric gradient for the hero weather card.
 *
 * @param {string} condition - Weather condition (Clear, Clouds, Rain, etc.)
 * @param {boolean} isNight - Whether it is nighttime
 * @param {boolean} isDark - Whether theme is dark mode
 * @returns {string} CSS background gradient
 */
export const getWeatherBackground = (condition = "Clear", isNight = false, isDark = false) => {
  const cond = condition.toLowerCase();

  if (isDark) {
    if (cond.includes("thunder")) {
      return "linear-gradient(145deg, #0e1628 0%, #151433 60%, #0B1D3A 100%)";
    }
    if (cond.includes("rain") || cond.includes("drizzle")) {
      return "linear-gradient(145deg, #0B1D3A 0%, #0f274a 60%, #0a172e 100%)";
    }
    if (cond.includes("snow")) {
      return "linear-gradient(145deg, #0d1e38 0%, #162c4c 60%, #0B1D3A 100%)";
    }
    if (cond.includes("cloud")) {
      return "linear-gradient(145deg, #0d1b32 0%, #13243f 60%, #0a162b 100%)";
    }
    if (cond.includes("mist") || cond.includes("fog") || cond.includes("haze")) {
      return "linear-gradient(145deg, #0f1c2e 0%, #152336 60%, #0B1D3A 100%)";
    }
    // Clear
    return isNight
      ? "linear-gradient(145deg, #071020 0%, #0B1D3A 60%, #102547 100%)"
      : "linear-gradient(145deg, #0B1D3A 0%, #122b52 60%, #0e2447 100%)";
  }

  // Light Mode gradients (Ultra-soft, refined off-white / pale mist)
  if (cond.includes("thunder")) {
    return "linear-gradient(145deg, #ffffff 0%, #f3f0fb 60%, #f7f5fd 100%)";
  }
  if (cond.includes("rain") || cond.includes("drizzle")) {
    return "linear-gradient(145deg, #ffffff 0%, #edf7fc 60%, #f3f9fd 100%)";
  }
  if (cond.includes("snow")) {
    return "linear-gradient(145deg, #ffffff 0%, #f0f7fc 60%, #f8fbfe 100%)";
  }
  if (cond.includes("cloud")) {
    return "linear-gradient(145deg, #ffffff 0%, #f2f5f9 60%, #f7f9fb 100%)";
  }
  if (cond.includes("mist") || cond.includes("fog") || cond.includes("haze")) {
    return "linear-gradient(145deg, #ffffff 0%, #f4f6f8 60%, #f9fafb 100%)";
  }
  // Clear
  return isNight
    ? "linear-gradient(145deg, #ffffff 0%, #edf2f8 60%, #f4f7fb 100%)"
    : "linear-gradient(145deg, #ffffff 0%, #edf8fc 60%, #f5fbfe 100%)";
};

/**
 * Returns ambient decorative shape color for the background visual element.
 */
export const getWeatherAuraColor = (condition = "Clear", isNight = false, isDark = false) => {
  const cond = condition.toLowerCase();

  if (isDark) {
    if (cond.includes("thunder")) return "rgba(168, 85, 247, 0.15)";
    if (cond.includes("rain") || cond.includes("drizzle")) return "rgba(56, 225, 255, 0.16)";
    if (cond.includes("snow")) return "rgba(224, 242, 254, 0.14)";
    if (cond.includes("cloud")) return "rgba(148, 163, 184, 0.12)";
    return isNight ? "rgba(147, 197, 253, 0.14)" : "rgba(56, 225, 255, 0.18)";
  }

  // Light mode aura colors
  if (cond.includes("thunder")) return "rgba(168, 85, 247, 0.08)";
  if (cond.includes("rain") || cond.includes("drizzle")) return "rgba(56, 225, 255, 0.15)";
  if (cond.includes("snow")) return "rgba(186, 230, 253, 0.15)";
  if (cond.includes("cloud")) return "rgba(148, 163, 184, 0.1)";
  return isNight ? "rgba(147, 197, 253, 0.12)" : "rgba(254, 240, 138, 0.25)";
};
