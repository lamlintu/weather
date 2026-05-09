import { AirConditions } from "./air-conditions";
import { CurrentWeather } from "./current-weather";
import { SearchBar } from "./search-bar";
import { TodayForecast } from "./today-forecast";
import { WeekForecast } from "./week-forecast";

import s from "./weather-report.module.scss";
export default function WeatherReport() {
  return (
    <div className={s.report}>
      <div className={s.main}>
        <SearchBar />
        <CurrentWeather />
        <TodayForecast />
        <AirConditions />
      </div>

      <div className={s.side}>
        <WeekForecast />
      </div>
    </div>
  );
}
