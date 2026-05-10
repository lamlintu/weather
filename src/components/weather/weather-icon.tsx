function getWeatherIcon(code: number, isDay: boolean): string {
  if (code === 0) {
    return isDay
      ? "src/assets/icons/clear.svg"
      : "src/assets/icons/clear-night.svg";
  }

  if (code <= 3) {
    return isDay
      ? "src/assets/icons/partly-cloudy.svg"
      : "src/assets/icons/cloudy.svg";
  }

  if (code === 0) return "src/assets/icons/clear.svg";
  if (code <= 3) return "src/assets/icons/partly-cloudy.svg";
  if (code <= 48) return "src/assets/icons/fog.svg";
  if (code <= 67) return "src/assets/icons/rain.svg";
  if (code <= 77) return "src/assets/icons/snow.svg";
  if (code <= 82) return "src/assets/icons/rain.svg";
  if (code <= 99) return "src/assets/icons/thunder.svg";

  return "undefined";
}

type Props = {
  code: number;
  isDay: boolean;
  width: number;
  height: number;
};

export function WeatherIcon({ code, isDay, width, height }: Props) {
  const src = getWeatherIcon(code, isDay);

  return (
    <img
      src={src}
      alt="icon for showing the weather"
      width={width}
      height={height}
    />
  );
}
