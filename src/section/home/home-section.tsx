"use client";

import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { Station } from "@/api/stations/types";
import { useStations } from "@/hooks/stations/use-stations";
import { useMapController } from "@/hooks/map/use-map";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen";
import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { MapContainer } from "@/components/MapContainer/MapContainer";
import { StationFilter } from "@/components/StationFilter/StationFilter";
import { StationsList } from "@/components/StationsList/StationsList";

export default function HomeSection() {
  const {
    filteredStations,
    cities,
    selectedCity,
    selectedStation,
    loading,
    error,
    setSelectedCity,
    setSelectedStation,
    clearFilters,
  } = useStations();

  const { setMapRef, flyToStation } = useMapController();

  const handleStationSelect = (station: Station) => {
    setSelectedStation(station);
    flyToStation(station);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Paper sx={{ p: 2 }}>
            <StationFilter
              cities={cities}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              onClear={clearFilters}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ height: "60vh", overflow: "hidden" }}>
            <MapContainer
              stations={filteredStations}
              selectedStation={selectedStation}
              onMapReady={setMapRef}
              onMarkerClick={handleStationSelect}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ height: "60vh", overflow: "auto" }}>
            <StationsList
              stations={filteredStations}
              selectedStation={selectedStation}
              onStationSelect={handleStationSelect}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
