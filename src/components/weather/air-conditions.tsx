import type { WeatherData } from "../../types/weather";
import s from "./air-conditions.module.scss";
import ThermometerSvg from "@/assets/icons/thermometer.svg?react";
import HumiditySvg from "@/assets/icons/water-drop.svg?react";
import WindSvg from "@/assets/icons/wind.svg?react";
import RainSvg from "@/assets/icons/rain.svg?react";

type Props = {
  current: WeatherData["current"];
  currentUnits: WeatherData["current_units"];
};

const icons: Record<
  string,
  React.ComponentType<{ width: number; height: number }>
> = {
  feelsLike: ThermometerSvg,
  humidity: HumiditySvg,
  windSpeed: WindSvg,
  precipitation: RainSvg,
};
export function AirConditions({ current, currentUnits }: Props) {
  const conditions = {
    feelsLike: {
      label: "Feels like",
      value: current.apparent_temperature,
      unit: currentUnits.apparent_temperature,
    },
    humidity: {
      label: "Humidity",
      value: current.relative_humidity_2m,
      unit: currentUnits.relative_humidity_2m,
    },
    windSpeed: {
      label: "Wind speed",
      value: current.wind_speed_10m,
      unit: currentUnits.wind_speed_10m,
    },
    precipitation: {
      label: "Chance of rain",
      value: current.precipitation_probability,
      unit: currentUnits.precipitation_probability,
    },
  };

  return (
    <article className={s.container}>
      <div className="flex justify-space-between">
        <h2>Air Conditions</h2>
      </div>

      <div className={s.conditions}>
        {Object.entries(conditions).map(([key, item]) => {
          const Icon = icons[key];
          return (
            <div key={key} className="grid gap-1">
              <span className="flex align-center gap-1">
                <Icon width={24} height={24} />
                <p className={s.label}>{item.label}:</p>
              </span>
              <p className={s.value}>
                {item.value} {item.unit}
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
}
