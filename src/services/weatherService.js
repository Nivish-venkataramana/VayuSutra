const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

/**
 * Fetches current weather data for a specified city from OpenWeatherMap.
 *
 * @param {string} city - The city name to query
 * @returns {Promise<object>} The raw OpenWeatherMap Current Weather response JSON
 */
export async function getWeather(city) {
  const queryCity = (city || "").trim();

  if (!queryCity) {
    throw new Error("Please enter a city name");
  }

  // Safe developer diagnostics in development mode
  if (import.meta.env.DEV) {
    console.log("API URL:", API_URL);
    console.log("API Key configured:", Boolean(API_KEY));
  }

  if (!API_KEY || API_KEY === "YOUR_API_KEY") {
    throw new Error(
      "OpenWeatherMap API Key is missing. Please add your VITE_WEATHER_API_KEY in the .env file and restart the dev server."
    );
  }

  const endpoint = `${API_URL}?q=${encodeURIComponent(queryCity)}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(endpoint);

    if (import.meta.env.DEV) {
      console.log("Weather API status:", response.status);
    }

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found. Please check the city name and try again.");
      }
      if (response.status === 401) {
        throw new Error(
          "Invalid API key or key not activated yet. OpenWeatherMap keys typically take 10 to 60 minutes to activate globally."
        );
      }
      if (response.status === 429) {
        throw new Error("Too many requests. Please try again later.");
      }
      throw new Error(data.message || "Unable to fetch weather data.");
    }

    return data;
  } catch (error) {
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      throw new Error("Unable to connect to the weather service. Please check your internet connection.");
    }
    throw error;
  }
}
