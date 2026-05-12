import { getTemperatureUnitLabel, formatHourlyTime } from "../helpers";

describe("getTemperatureUnitLabel", () => {
  it("should return °C for celsius", () => {
    expect(getTemperatureUnitLabel("celsius")).toBe("°C");
  });

  it("should return °F for fahrenheit", () => {
    expect(getTemperatureUnitLabel("fahrenheit")).toBe("°F");
  });
});

describe("formatHourlyTime", () => {
  it("should extract HH:MM from ISO datetime string", () => {
    expect(formatHourlyTime("2026-05-12T10:00")).toBe("10:00");
  });

  it("should work for midnight as well", () => {
    expect(formatHourlyTime("2026-05-12T00:00")).toBe("00:00");
  });

  it("should show the right format for night time", () => {
    expect(formatHourlyTime("2026-05-12T23:00")).toBe("23:00");
  });
});
