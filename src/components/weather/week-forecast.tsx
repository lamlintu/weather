import type { TemperatureUnit, WeatherData } from "../../types/weather";
import { getTemperatureUnitLabel } from "./helpers";
import { WeatherIcon } from "./weather-icon";
import s from "./week-forecast.module.scss";

type Props = {
  daily: WeatherData["daily"];
  unit: TemperatureUnit;
};

export function WeekForecast({ daily, unit }: Props) {
  const days = daily.time.map((date, index) => ({
    date,
    label:
      index === 0
        ? "Today"
        : new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
          }),
    max: daily.temperature_2m_max[index],
    min: daily.temperature_2m_min[index],
    code: daily.weather_code[index],
  }));

  console.log(1232313, unit);
  return (
    <article className={s.container}>
      <h2>7-day forecast</h2>
      <ul className={s.list}>
        {days.map((day) => (
          <li className={s.listItem}>
            <p>{day.label}</p>
            <span className={s.icon}>
              <WeatherIcon code={day.code} isDay width={30} height={30} />
            </span>
            <p>
              <strong>{Math.round(day.max)}</strong>/{Math.round(day.min)}{" "}
              {getTemperatureUnitLabel(unit)}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
