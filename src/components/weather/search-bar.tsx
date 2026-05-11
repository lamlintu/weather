import { useState, useRef, useEffect } from "react";
import { useGeoSearch } from "../hooks/use-geo-search";
import s from "./search-bar.module.scss";
import type { GeoResult } from "../../types/weather";

interface Props {
  onSelect: (result: GeoResult) => void;
}

export function SearchBar({ onSelect }: Props) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close the dropdown/list of names when user anywhere outside of the list.
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setQuery(value), 400);
  };

  const handleSelect = (result: GeoResult) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setInput(`${result.name}, ${result.country}`);
    setQuery("");
    onSelect(result);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!data || !query) return;
    if (e.key === "Enter") {
      e.preventDefault();
      if (data[0]) handleSelect(data[0]);
    } else if (e.key === "Escape") {
      setQuery("");
    }
  };

  const { data, isFetching } = useGeoSearch(query);

  return (
    <div ref={wrapperRef} className={s.container}>
      {isFetching && (
        <div className="loader-center">
          <div className="loader" />
        </div>
      )}
      <search>
        <form>
          <input
            type="search"
            value={input}
            className={s.searchInput}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Search for a city"
            onKeyDown={handleKeyDown}
          />
        </form>
      </search>

      {data && query && (
        <ul className={s.dropdown}>
          {data.map((result) => (
            <li
              key={result.id}
              className={s.item}
              onClick={() => handleSelect(result)}
            >
              <span>
                <strong>{result.name}</strong>
                <p>{result.country}</p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
