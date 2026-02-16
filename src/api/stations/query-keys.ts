export const STATIONS_KEYS = {
  all: ["stations"] as const,
  lists: () => [...STATIONS_KEYS.all, "list"] as const,
  list: (filters?: Record<string, any>) =>
    [...STATIONS_KEYS.lists(), filters] as const,
  details: () => [...STATIONS_KEYS.all, "detail"] as const,
  detail: (id: string) => [...STATIONS_KEYS.details(), id] as const,
} as const;
