import s from "./current-weather.module.scss";

export function CurrentWeather() {
  return (
    <div className={s.container}>
      <article>
        <h2 className={s.title}>Helsinki</h2>
        <p className={s.temp}>15 °C</p>
      </article>

      <div className={s.icon}>
        <img
          src="src/assets/icons/clear.svg"
          alt="sunny"
          width={96}
          height={96}
        />
      </div>
    </div>
  );
}
