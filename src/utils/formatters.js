/**
 * Utility functions for formatting weather-related metrics and data.
 */

/**
 * Converts Celsius temperature to Fahrenheit.
 * @param {number} celsius
 * @returns {number}
 */
export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

/**
 * Formats temperature value according to selected unit ('C' or 'F').
 * @param {number} tempInCelsius
 * @param {'C' | 'F'} unit
 * @returns {string} Formatted string, e.g. "27°C" or "81°F"
 */
export const formatTemperature = (tempInCelsius, unit = 'C') => {
  if (tempInCelsius === null || tempInCelsius === undefined || isNaN(tempInCelsius)) {
    return '--°';
  }
  const val = unit === 'F' ? celsiusToFahrenheit(tempInCelsius) : tempInCelsius;
  return `${Math.round(val)}°${unit}`;
};

/**
 * Formats temperature without unit symbol (just degree number).
 * @param {number} tempInCelsius
 * @param {'C' | 'F'} unit
 * @returns {string} e.g. "27°"
 */
export const formatTemperatureNum = (tempInCelsius, unit = 'C') => {
  if (tempInCelsius === null || tempInCelsius === undefined || isNaN(tempInCelsius)) {
    return '--°';
  }
  const val = unit === 'F' ? celsiusToFahrenheit(tempInCelsius) : tempInCelsius;
  return `${Math.round(val)}°`;
};

/**
 * Formats Unix timestamp to time string (e.g., "6:30 AM" or "7 PM").
 * @param {number} timestamp - Unix timestamp in seconds
 * @param {number} timezoneOffset - Timezone offset in seconds (from API)
 * @param {boolean} shortHourOnly - If true, returns "7 PM" instead of "7:00 PM"
 * @returns {string}
 */
export const formatTime = (timestamp, timezoneOffset = 0, shortHourOnly = false) => {
  if (!timestamp) return '--:--';
  // Compute date considering the API's timezone offset
  const localTime = new Date((timestamp + timezoneOffset) * 1000);
  
  if (shortHourOnly) {
    return localTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      timeZone: 'UTC',
    });
  }

  return localTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  });
};

/**
 * Formats Unix timestamp to full human-readable date.
 * E.g., "Wednesday, September 9"
 * @param {number} timestamp - Unix timestamp in seconds
 * @param {number} timezoneOffset - Timezone offset in seconds
 * @returns {string}
 */
export const formatDate = (timestamp, timezoneOffset = 0) => {
  if (!timestamp) return '';
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

/**
 * Formats Unix timestamp to weekday name (e.g. "Monday", "Tomorrow").
 * @param {number} timestamp
 * @param {number} timezoneOffset
 * @returns {string}
 */
export const formatDayName = (timestamp, timezoneOffset = 0) => {
  if (!timestamp) return '';
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    timeZone: 'UTC',
  });
};

/**
 * Formats wind speed.
 * @param {number} speedInMps - Wind speed in meters/second
 * @param {'metric' | 'imperial'} system
 * @returns {string}
 */
export const formatWindSpeed = (speedInMps, system = 'metric') => {
  if (speedInMps === null || speedInMps === undefined || isNaN(speedInMps)) return '--';
  if (system === 'imperial') {
    // 1 m/s = 2.23694 mph
    const mph = speedInMps * 2.23694;
    return `${mph.toFixed(1)} mph`;
  }
  return `${speedInMps.toFixed(1)} m/s`;
};

/**
 * Formats atmospheric pressure.
 * @param {number} hPa
 * @returns {string}
 */
export const formatPressure = (hPa) => {
  if (!hPa) return '-- hPa';
  return `${hPa} hPa`;
};

/**
 * Formats visibility in kilometers or miles.
 * @param {number} meters
 * @returns {string}
 */
export const formatVisibility = (meters) => {
  if (meters === null || meters === undefined) return '--';
  const km = (meters / 1000).toFixed(1);
  return `${km} km`;
};

/**
 * Formats wind direction degrees to compass directions (e.g., N, NE, E, SE).
 * @param {number} deg
 * @returns {string}
 */
export const formatWindDirection = (deg) => {
  if (deg === null || deg === undefined) return '';
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round((deg % 360) / 22.5);
  return directions[index % 16];
};

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str
 * @returns {string}
 */
export const capitalizeWords = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
