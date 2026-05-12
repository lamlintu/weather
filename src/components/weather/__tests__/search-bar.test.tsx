import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { SearchBar } from "../search-bar";
import { createWrapper } from "@/tests/utils";
import geoResults from "./__data__/geo-results.json";

describe("SearchBar", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: geoResults }),
      } as Response),
    );
  });

  it("should render the search input", () => {
    render(<SearchBar onSelect={vi.fn()} />, { wrapper: createWrapper() });
    expect(screen.getByPlaceholderText("Search for a city"));
  });

  it("should shows dropdown results after typing", async () => {
    const user = userEvent.setup();
    render(<SearchBar onSelect={vi.fn()} />, { wrapper: createWrapper() });

    await user.type(screen.getByPlaceholderText("Search for a city"), "Ham");

    await waitFor(() => expect(screen.getByText("Hamburg")));
  });

  it("should show no city found when there are no search match", async () => {
    const user = userEvent.setup();
    render(<SearchBar onSelect={vi.fn()} />, { wrapper: createWrapper() });

    await user.type(screen.getByPlaceholderText("Search for a city"), "foobar");

    await waitFor(() => expect(screen.getByText("No city found")));
  });

  it("should select the first result on Enter key", async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar onSelect={onSelect} />, { wrapper: createWrapper() });

    await user.type(screen.getByPlaceholderText("Search for a city"), "Esp");
    await waitFor(() => screen.getByText("Espoo"));
    await user.keyboard("{Enter}");

    expect(onSelect).toHaveBeenCalledWith(geoResults[0]);
  });

  it("should close the list of cities on Escape key", async () => {
    const user = userEvent.setup();
    render(<SearchBar onSelect={vi.fn()} />, { wrapper: createWrapper() });

    await user.type(screen.getByPlaceholderText("Search for a city"), "Sto");
    await waitFor(() => screen.getByText("Stockholm"));
    await user.keyboard("{Escape}");

    expect(screen.queryByText("Stockholm")).toBeNull();
  });
});
