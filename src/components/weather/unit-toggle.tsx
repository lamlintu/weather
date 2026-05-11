// unit-toggle.tsx
import {
  SegmentedControl,
  SegmentedControlItem,
} from "../common/segmented-control";
import type { TemperatureUnit } from "../../types/weather";

type Props = {
  unit: TemperatureUnit;
  onChange: (unit: TemperatureUnit) => void;
};

export function UnitToggle({ unit, onChange }: Props) {
  return (
    <div className="flex justify-flex-end">
      <SegmentedControl>
        <SegmentedControlItem
          name="unit"
          value="celsius"
          label="°C"
          checked={unit === "celsius"}
          onChange={() => onChange("celsius")}
        />
        <SegmentedControlItem
          name="unit"
          value="fahrenheit"
          label="°F"
          checked={unit === "fahrenheit"}
          onChange={() => onChange("fahrenheit")}
        />
      </SegmentedControl>
    </div>
  );
}
