export interface WeatherData {
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  utc_offset_seconds: number;

  current_units: {
    temperature_2m: string;
    apparent_temperature: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
    is_day: string;
    weather_code: string;
    precipitation_probability: string;
  };

  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    is_day: 0 | 1;
    weather_code: number;
    precipitation_probability: number;
  };

  hourly_units: {
    temperature_2m: string;
    weather_code: string;
    is_day: string;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    is_day: (0 | 1)[];
  };

  daily_units: {
    temperature_2m_max: string;
    temperature_2m_min: string;
    weather_code: string;
  };

  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

export type TemperatureUnit = "celsius" | "fahrenheit";

export interface GeoResult {
  id: number;
  name: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
}
