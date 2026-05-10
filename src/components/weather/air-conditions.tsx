import s from "./air-conditions.module.scss";

type WeatherMetric = {
  label: string;
  value: number | string;
  unit: string;
};

type Props = {
  data: {
    feelsLike: WeatherMetric;
    humidity: WeatherMetric;
    windSpeed: WeatherMetric;
    pressure: WeatherMetric;
  };
};

export function AirConditions({ data }: Props) {
  return (
    <article className={s.container}>
      <div className="flex justify-space-between">
        <h2>Air Conditions</h2>
        <button>See more</button>
      </div>

      <div className={s.conditions}>
        {Object.entries(data).map(([key, item]) => (
          <div key={key}>
            <strong>{item.label}:</strong> {item.value} {item.unit}
          </div>
        ))}
      </div>
    </article>
  );
}
