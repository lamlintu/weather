import { useState } from "react";
import { useWeather } from "../../hooks/use-weather";

import { AirConditions } from "./air-conditions";
import { CurrentWeather } from "./current-weather";
import { SearchBar } from "./search-bar";
import { TodayForecast } from "./today-forecast";
import { UnitToggle } from "./unit-toggle";
import { WeekForecast } from "./week-forecast";

import type { GeoResult } from "../../types/weather";
import s from "./weather-report.module.scss";

export default function WeatherReport() {
  const [unit, setUnit] = useState<"celsius" | "fahrenheit">("celsius");
  const [coords, setCoords] = useState<{ lat: number; lon: number }>({
    lat: 60.17,
    lon: 24.94,
  });
  const [city, setCity] = useState("Helsinki, Finland");
  const { data, isLoading } = useWeather(coords.lat, coords.lon, unit);

  if (isLoading || !data) {
    return (
      <div className="loader-center">
        <div className="loader" />
      </div>
    );
  }

  const handleCitySelect = (result: GeoResult) => {
    setCity(`${result.name}, ${result.country}`);
    setCoords({ lat: result.latitude, lon: result.longitude });
  };

  const theme = data.current.is_day === 1 ? "light" : "dark";

  const currentWeather = {
    temp: data.current.temperature_2m,
    unit: data.current_units.temperature_2m,
    code: data.current.weather_code,
    isDay: data.current.is_day === 1,
  };

  return (
    <div className={s.theme} data-theme={theme}>
      <div className={s.report} data-theme={theme}>
        <div className={s.main}>
          <SearchBar onSelect={handleCitySelect} />
          <UnitToggle unit={unit} onChange={setUnit} />
          <CurrentWeather current={currentWeather} city={city} />
          <TodayForecast
            hourly={data.hourly}
            unit={unit}
            utcOffsetSeconds={data.utc_offset_seconds}
          />
          <AirConditions
            current={data.current}
            currentUnits={data.current_units}
          />
        </div>
        <div>
          <WeekForecast daily={data.daily} unit={unit} />
        </div>
      </div>
    </div>
  );
}
