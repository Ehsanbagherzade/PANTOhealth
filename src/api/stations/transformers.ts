import { RawStation, Station } from "./types";

export const transformStation = (raw: RawStation, index: number): Station => ({
  id: `station-${raw.id ?? index}`,
  name: raw.name.trim(),
  city: raw.city.trim(),
  latitude: raw.lat,
  longitude: raw.lng,
});

export const transformStations = (raw: RawStation[]): Station[] =>
  raw.map(transformStation);
