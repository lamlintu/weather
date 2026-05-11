import { formatHourlyTime, getTemperatureUnitLabel } from "./helpers";
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
  unit: TemperatureUnit;
  utcOffsetSeconds: number;
};

export function TodayForecast({ hourly, unit, utcOffsetSeconds }: Props) {
  // Offset current UTC time to the city's local time for filtering
  const cityNowStr =
    new Date(new Date().getTime() + utcOffsetSeconds * 1000)
      .toISOString()
      .slice(0, 13) + ":00";

  // Display current to next 7 hours in today's forecast
  const nextHours = hourly.time
    .map((time, index) => ({
      time,
      temp: hourly.temperature_2m[index],
      code: hourly.weather_code[index],
      isDay: hourly.is_day[index],
    }))
    .filter((hour) => hour.time >= cityNowStr)
    .slice(0, 8);

  return (
    <article className={s.container}>
      <h2>Today's forecast</h2>

      <div className={s.list}>
        {nextHours.map((hour) => (
          <div key={hour.time} className={s.listItem}>
            <p>{formatHourlyTime(hour.time)}</p>
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
