import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const ONE_HOUR = 1000 * 60 * 60;

export function useWeather(latitude: number, longitude: number) {
  return useQuery({
    queryKey: ["weather", latitude, longitude],
    queryFn: async () => {
      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current: [
          "temperature_2m",
          "apparent_temperature",
          "relative_humidity_2m",
          "wind_speed_10m",
          "is_day",
          "weather_code",
          "pressure_msl",
        ].join(","),
        hourly: ["temperature_2m", "weather_code"].join(","),
        daily: [
          "temperature_2m_max",
          "temperature_2m_min",
          "weather_code",
        ].join(","),
        timezone: "auto",
      });

      const response = await fetch(`${BASE_URL}?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      return response.json();
    },

    refetchInterval: ONE_HOUR,
    refetchIntervalInBackground: false,
  });
}
