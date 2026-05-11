import ClearSvg from "@/assets/icons/clear.svg?react";
import ClearNight from "@/assets/icons/clear-night.svg?react";
import PartlyCloudy from "@/assets/icons/partly-cloudy.svg?react";
import Cloudy from "@/assets/icons/cloudy.svg?react";
import Fog from "@/assets/icons/fog.svg?react";
import Rain from "@/assets/icons/rain.svg?react";
import Snow from "@/assets/icons/snow.svg?react";
import Storm from "@/assets/icons/storm.svg?react";

type Props = {
  code: number;
  isDay: boolean;
  width: number;
  height: number;
};

function getWeatherIcon(code: number, isDay: boolean) {
  if (code === 0) return isDay ? ClearSvg : ClearNight;
  if (code <= 3) return isDay ? PartlyCloudy : Cloudy;
  if (code <= 48) return Fog;
  if (code <= 67) return Rain;
  if (code <= 77) return Snow;
  if (code <= 82) return Rain;
  if (code <= 99) return Storm;
  return "undefined";
}

export function WeatherIcon({ code, isDay, width, height }: Props) {
  const Icon = getWeatherIcon(code, isDay) as React.ComponentType<{
    width: number;
    height: number;
  }>;
  return <Icon width={width} height={height} />;
}
