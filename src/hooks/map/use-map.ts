import { useRef, useCallback } from "react";
import { useMap as useLeafletMap } from "react-leaflet";
import { Station } from "@/api/stations/types";

export const useMapController = () => {
  const mapRef = useRef<L.Map | null>(null);

  const setMapRef = useCallback((map: L.Map) => {
    mapRef.current = map;
  }, []);

  const flyToStation = useCallback((station: Station) => {
    if (mapRef.current) {
      mapRef.current.flyTo([station.latitude, station.longitude], 15, {
        duration: 1.5,
      });
    }
  }, []);

  const highlightMarker = useCallback((stationId: string) => {
    console.log("Highlight marker:", stationId);
  }, []);

  return {
    mapRef,
    setMapRef,
    flyToStation,
    highlightMarker,
  };
};

export const useMap = () => {
  const map = useLeafletMap();
  return map;
};
