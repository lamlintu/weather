import { AirConditions } from "./air-conditions";
import { CurrentWeather } from "./current-weather";
import { SearchBar } from "./search-bar";
import { TodayForecast } from "./today-forecast";
import { WeekForecast } from "./week-forecast";

export default function WeatherReport() {
  return (
    <div>
      <SearchBar />
      <CurrentWeather />
      <TodayForecast />
      <AirConditions />
      <WeekForecast />
    </div>
  );
}
