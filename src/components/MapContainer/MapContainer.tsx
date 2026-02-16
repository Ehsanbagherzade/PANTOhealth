"use client";

import dynamic from "next/dynamic";
import { Station } from "@/api/stations/types";
import { Box } from "@mui/material";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen";

const MapWithNoSSR = dynamic(
  () => import("./MapContent"), // کامپوننت رو جدا می‌کنیم
  {
    ssr: false,
    loading: () => (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingScreen />
      </Box>
    ),
  },
);

interface MapContainerProps {
  stations: Station[];
  selectedStation: Station | null;
  onMapReady: (map: L.Map) => void;
  onMarkerClick: (station: Station) => void;
}

export function MapContainer(props: MapContainerProps) {
  return <MapWithNoSSR {...props} />;
}
