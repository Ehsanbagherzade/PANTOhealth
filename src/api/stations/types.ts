export interface Station {
  id: string;
  name: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface RawStation {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

export interface GetStationsResponse {
  data: Station[];
  metadata: {
    total: number;
  };
}

export interface UseStationsReturn {
  stations: Station[];
  filteredStations: Station[];
  cities: string[];
  selectedCity: string | null;
  selectedStation: Station | null;
  loading: boolean;
  error: Error | null;
  setSelectedCity: (city: string | null) => void;
  setSelectedStation: (station: Station | null) => void;
  clearFilters: () => void;
  refetch: () => Promise<GetStationsResponse>;
}
