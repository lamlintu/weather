import { useQuery } from "@tanstack/react-query";

export interface GeoResult {
  id: number;
  name: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

const fetchGeoResults = async (city: string): Promise<GeoResult[]> => {
  const params = new URLSearchParams({
    name: city,
    count: "5",
    language: "en",
    format: "json",
  });

  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?${params}`,
  );
  if (!res.ok) throw new Error("Failed to fetch geo");

  const data = await res.json();
  return data.results ?? [];
};

export const useGeoSearch = (city: string) =>
  useQuery({
    queryKey: ["geo", city],
    queryFn: () => fetchGeoResults(city),
    enabled: city.trim().length > 2,
  });
