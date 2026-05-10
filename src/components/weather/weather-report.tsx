import { AirConditions } from "./air-conditions";
import { CurrentWeather } from "./current-weather";
import { SearchBar } from "./search-bar";
import { TodayForecast } from "./today-forecast";
import { WeekForecast } from "./week-forecast";

import s from "./weather-report.module.scss";
import { useWeather } from "../hooks/use-weather";

export default function WeatherReport() {
  const { data, isLoading } = useWeather(60.1695, 24.9354);

  if (isLoading) {
    return <p>Loading</p>;
  }

  const currentWeather = {
    temp: data.current.temperature_2m,
    unit: data.current_units.temperature_2m,
    code: data.current.weather_code,
    isDay: data.current.is_day === 1,
  };

  return (
    <div className={s.report}>
      <div className={s.main}>
        <SearchBar />
        <CurrentWeather current={currentWeather} />
        <TodayForecast />
        <AirConditions />
      </div>

      <div className={s.side}>
        <WeekForecast />
      </div>
    </div>
  );
}
