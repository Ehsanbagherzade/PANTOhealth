import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Station,
  UseStationsReturn,
  GetStationsResponse,
} from "@/api/stations/types";
import { stationsApi } from "@/api/stations/stations";
import { STATIONS_KEYS } from "@/api/stations/query-keys";

export const useStations = (): UseStationsReturn => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  const {
    data,
    isLoading: loading,
    error,
    refetch: queryRefetch,
  } = useQuery<GetStationsResponse, Error>({
    queryKey: STATIONS_KEYS.lists(),
    queryFn: stationsApi.getAll,
  });

  const stations = data?.data || [];

  const cities = useMemo(() => {
    return [...new Set(stations.map((s) => s.city))].sort();
  }, [stations]);

  const filteredStations = useMemo(() => {
    if (!selectedCity) return stations;
    return stations.filter((station) => station.city === selectedCity);
  }, [stations, selectedCity]);

  const clearFilters = () => {
    setSelectedCity(null);
    setSelectedStation(null);
  };

  const refetch = async (): Promise<GetStationsResponse> => {
    const result = await queryRefetch();
    return result.data!;
  };

  return {
    stations,
    filteredStations,
    cities,
    selectedCity,
    selectedStation,
    loading,
    error: error as Error | null,
    setSelectedCity,
    setSelectedStation,
    clearFilters,
    refetch,
  };
};
