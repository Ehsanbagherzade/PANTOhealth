export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
  endpoints: {
    stations: process.env.NEXT_PUBLIC_STATIONS_ENDPOINT ?? "",
  },
} as const;

export const getStationsUrl = (): string => {
  return `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.stations}`;
};
