import s from "./week-forecast.module.scss";
export function WeekForecast() {
  return (
    <article className={s.container}>
      <h2>7-day forecast</h2>
      <ul className={s.list}>
        <li className={s.listItem}>
          <p>Today</p>
          <p>15 °C</p>
        </li>
        <li className={s.listItem}>
          <p>Tuesday</p>
          <p>15 °C</p>
        </li>
        <li className={s.listItem}>
          <p>Wednesday</p>
          <p>15 °C</p>
        </li>
        <li className={s.listItem}>
          <p>Thursday</p>
          <p>15 °C</p>
        </li>
        <li className={s.listItem}>
          <p>Friday</p>
          <p>15 °C</p>
        </li>
        <li className={s.listItem}>
          <p>Saturday</p>
          <p>15 °C</p>
        </li>
        <li className={s.listItem}>
          <p>Sunday</p>
          <p>15 °C</p>
        </li>
      </ul>
    </article>
  );
}
