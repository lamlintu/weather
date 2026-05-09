import s from "./today-forecast.module.scss";

export function TodayForecast() {
  return (
    <article className={s.container}>
      <h2>Today's forecast</h2>

      <div className={s.list}>
        <div>
          <p>9:00</p>
          <img
            src="src/assets/icons/clear.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>10:00</p>
          <img
            src="src/assets/icons/clear.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>11:00</p>
          <img
            src="src/assets/icons/clear.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>12:00</p>
          <img
            src="src/assets/icons/clear.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>13:00</p>
          <img
            src="src/assets/icons/clear.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>14:00</p>
          <img
            src="src/assets/icons/clear.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>15:00</p>
          <img
            src="src/assets/icons/cloudy.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>16:00</p>
          <img
            src="src/assets/icons/storm.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
        <div>
          <p>17:00</p>
          <img
            src="src/assets/icons/clear.svg"
            alt="sunny"
            width={36}
            height={36}
          />
          <p>10 °C</p>
        </div>
      </div>
    </article>
  );
}
