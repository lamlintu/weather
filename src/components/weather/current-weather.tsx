import s from "./current-weather.module.scss";
import { WeatherIcon } from "./weather-icon";

type Props = {
  current: {
    temp: number;
    unit: string;
    code: number;
    isDay: boolean;
  };
};

export function CurrentWeather({ current }: Props) {
  return (
    <div className={s.container}>
      <article>
        <h2 className={s.title}>Helsinki</h2>
        <p className={s.temp}>
          {Math.round(current.temp)} {current.unit}
        </p>
      </article>

      <div className={s.icon}>
        <WeatherIcon
          code={current.code}
          isDay={current.isDay}
          width={96}
          height={96}
        />
      </div>
    </div>
  );
}
