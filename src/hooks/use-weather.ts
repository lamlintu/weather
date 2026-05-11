import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "../types/weather";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const ONE_HOUR = 1000 * 60 * 60;

export function useWeather(latitude: number, longitude: number, unit: string) {
  return useQuery({
    queryKey: ["weather", latitude, longitude, unit],
    queryFn: async (): Promise<WeatherData> => {
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
          "precipitation_probability",
        ].join(","),
        hourly: ["temperature_2m", "weather_code", "is_day"].join(","),
        daily: [
          "temperature_2m_max",
          "temperature_2m_min",
          "weather_code",
        ].join(","),
        timezone: "auto",
        temperature_unit: unit,
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
