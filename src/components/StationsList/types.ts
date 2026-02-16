import { Station } from "@/api/stations/types";

export interface StationsListProps {
  stations: Station[];
  selectedStation: Station | null;
  onStationSelect: (station: Station) => void;
}
