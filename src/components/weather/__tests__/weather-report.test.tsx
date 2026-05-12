import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeatherReport from "../weather-report";
import mockData from "./__data__/weather-data.json";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("WeatherReport", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as Response),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should show loading spinner before data loads", () => {
    render(<WeatherReport />, { wrapper: createWrapper() });
    expect(document.querySelector(".loader"));
  });

  it("should display the default Helsinki city name", async () => {
    render(<WeatherReport />, { wrapper: createWrapper() });
    await waitFor(() => expect(screen.getByText("Helsinki, Finland")));
  });

  it("should switch unit from celsius to fahrenheit", async () => {
    const user = userEvent.setup();
    render(<WeatherReport />, { wrapper: createWrapper() });
    await waitFor(() => screen.getByText("Helsinki, Finland"));

    const fahrenheitInput = document.querySelector(
      'input[value="fahrenheit"]',
    ) as HTMLInputElement;
    const celsiusInput = document.querySelector(
      'input[value="celsius"]',
    ) as HTMLInputElement;

    expect(celsiusInput).toBeChecked();
    await user.click(fahrenheitInput);
    expect(fahrenheitInput).toBeChecked();
  });

  it("should apply light theme during daytime", async () => {
    render(<WeatherReport />, { wrapper: createWrapper() });
    await waitFor(() =>
      expect(document.querySelector("[data-theme='light']")).toBeTruthy(),
    );
  });

  it("should apply dark theme during night time", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ...mockData,
            current: { ...mockData.current, is_day: 0 },
          }),
      } as Response),
    );
    render(<WeatherReport />, { wrapper: createWrapper() });
    await waitFor(() =>
      expect(document.querySelector("[data-theme='dark']")).toBeTruthy(),
    );
  });
});
