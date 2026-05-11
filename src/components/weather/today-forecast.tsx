import { getTemperatureUnitLabel } from "./helpers";
import s from "./today-forecast.module.scss";
import { WeatherIcon } from "./weather-icon";
import type { TemperatureUnit } from "../../types/weather";

type Props = {
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    is_day: number[];
  };
  timezone: string;
  unit: TemperatureUnit;
};

export function TodayForecast({ hourly, timezone, unit }: Props) {
  const currentHour = new Date();
  currentHour.setMinutes(0, 0, 0);

  // Display current to next 7 hours in today's forecast
  const nextHours = hourly.time
    .map((time, index) => ({
      time,
      temp: hourly.temperature_2m[index],
      code: hourly.weather_code[index],
      isDay: hourly.is_day[index],
    }))
    .filter((hour) => new Date(hour.time) >= currentHour)
    .slice(0, 8);

  return (
    <article className={s.container}>
      <h2>Today's forecast</h2>

      <div className={s.list}>
        {nextHours.map((hour) => (
          <div className={s.listItem}>
            <p>
              {new Date(hour.time).toLocaleTimeString("fi-FI", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: timezone,
              })}
            </p>

            <WeatherIcon
              code={hour.code}
              isDay={hour.isDay === 1}
              width={36}
              height={36}
            />

            <p>
              {Math.round(hour.temp)} {getTemperatureUnitLabel(unit)}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
