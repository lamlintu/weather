import s from "./air-conditions.module.scss";
export function AirConditions() {
  return (
    <article className={s.container}>
      <div className="flex justify-space-between">
        <h2>Air Conditions</h2>
        <button>See more</button>
      </div>

      <div className={s.conditions}>
        <div>Wind</div>
        <div>Chance of rain</div>
        <div>Humidity</div>
        <div>UV index</div>
      </div>
    </article>
  );
}
