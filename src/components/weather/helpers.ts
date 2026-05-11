export function getTemperatureUnitLabel(unit: "celsius" | "fahrenheit") {
  return unit === "celsius" ? "°C" : "°F";
}

/* Extract HH:MM from "YYYY-MM-DDTHH:MM", which is already in city's local time */
export function formatHourlyTime(time: string): string {
  return time.slice(11, 16);
}
