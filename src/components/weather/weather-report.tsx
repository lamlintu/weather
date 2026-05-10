import { AirConditions } from "./air-conditions";
import { CurrentWeather } from "./current-weather";
import { SearchBar } from "./search-bar";
import { TodayForecast } from "./today-forecast";

import s from "./weather-report.module.scss";
import { useWeather } from "../hooks/use-weather";
import WeekForecast from "./week-forecast";

type WeatherData = {
  current: {
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    pressure_msl: number;
  };

  current_units: {
    apparent_temperature: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
    pressure_msl: string;
  };
};

export default function WeatherReport() {
  const { data, isLoading } = useWeather(60.1695, 24.9354);

  if (isLoading) {
    return <p>Loading</p>;
  }

  const timezone = data.timezone;

  const currentWeather = {
    temp: data.current.temperature_2m,
    unit: data.current_units.temperature_2m,
    code: data.current.weather_code,
    isDay: data.current.is_day === 1,
  };

  function getAirConditions(data: WeatherData) {
    const { current, current_units } = data;

    return {
      feelsLike: {
        label: "Feels like",
        value: current.apparent_temperature,
        unit: current_units.apparent_temperature,
      },

      humidity: {
        label: "Humidity",
        value: current.relative_humidity_2m,
        unit: current_units.relative_humidity_2m,
      },

      windSpeed: {
        label: "Wind speed",
        value: current.wind_speed_10m,
        unit: current_units.wind_speed_10m,
      },

      pressure: {
        label: "Pressure",
        value: current.pressure_msl,
        unit: current_units.pressure_msl,
      },
    };
  }

  return (
    <div className={s.report}>
      <div className={s.main}>
        <SearchBar />
        <CurrentWeather current={currentWeather} />
        <TodayForecast hourly={data.hourly} timezone={timezone} />
        <AirConditions data={getAirConditions(data)} />
      </div>

      <div className={s.side}>
        <WeekForecast daily={data.daily} />
      </div>
    </div>
  );
}
