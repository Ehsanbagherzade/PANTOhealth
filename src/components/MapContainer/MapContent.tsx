"use client";

import React, { useEffect } from "react";
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Station } from "@/api/stations/types";
import { Box } from "@mui/material";

const setupMarkers = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
};

if (typeof window !== "undefined") {
  setupMarkers();
}

interface MapContainerProps {
  stations: Station[];
  selectedStation: Station | null;
  onMapReady: (map: L.Map) => void;
  onMarkerClick: (station: Station) => void;
}

function MapController({ onMapReady }: { onMapReady: (map: L.Map) => void }) {
  const map = useMap();

  useEffect(() => {
    onMapReady(map);
  }, [map, onMapReady]);

  return null;
}

export default function MapContent({
  stations,
  selectedStation,
  onMapReady,
  onMarkerClick,
}: MapContainerProps) {
  const germanyCenter: [number, number] = [51.1657, 10.4515];

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <LeafletMap
        center={germanyCenter}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController onMapReady={onMapReady} />

        {stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
            eventHandlers={{
              click: () => onMarkerClick(station),
            }}
          >
            <Popup>
              <div>
                <strong>{station.name}</strong>
                <br />
                {station.city}
              </div>
            </Popup>
          </Marker>
        ))}
      </LeafletMap>
    </Box>
  );
}
