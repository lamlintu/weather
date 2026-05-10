export function getTemperatureUnitLabel(unit: "celsius" | "fahrenheit") {
  return unit === "celsius" ? "°C" : "°F";
}
