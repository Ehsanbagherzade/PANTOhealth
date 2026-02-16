"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Train as TrainIcon,
} from "@mui/icons-material";
import { StationsListProps } from "@/components/StationsList/types";

export function StationsList({
  stations,
  selectedStation,
  onStationSelect,
}: StationsListProps) {
  if (stations.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          p: 3,
          textAlign: "center",
        }}
      >
        <TrainIcon sx={{ fontSize: 48, color: "text.secondary", mb: 2 }} />
        <Typography variant="h6" color="text.secondary" gutterBottom>
          No stations found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try clearing the filter or selecting a different city
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ p: 0 }}>
      {stations.map((station, index) => (
        <React.Fragment key={station.id}>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedStation?.id === station.id}
              onClick={() => onStationSelect(station)}
              sx={{
                py: 2,
                "&.Mui-selected": {
                  backgroundColor: "primary.light",
                  "&:hover": { backgroundColor: "primary.light" },
                },
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationIcon
                      sx={{
                        fontSize: 20,
                        color:
                          selectedStation?.id === station.id
                            ? "primary.main"
                            : "text.secondary",
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      component="span"
                    >
                      {station.name}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Box
                    sx={{
                      mt: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={station.city}
                      size="small"
                      variant="outlined"
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      component="span"
                    >
                      {station.latitude.toFixed(4)},{" "}
                      {station.longitude.toFixed(4)}
                    </Typography>
                  </Box>
                }
                secondaryTypographyProps={{ component: "span" }}
              />
            </ListItemButton>
          </ListItem>
          {index < stations.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}
