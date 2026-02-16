"use client";

import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";

interface StationFilterProps {
  cities: string[];
  selectedCity: string | null;
  onCityChange: (city: string | null) => void;
  onClear: () => void;
}

export function StationFilter({
  cities,
  selectedCity,
  onCityChange,
  onClear,
}: StationFilterProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <FormControl sx={{ minWidth: 200 }} size="small">
        <InputLabel id="city-filter-label">Filter by City</InputLabel>
        <Select
          labelId="city-filter-label"
          value={selectedCity || ""}
          label="Filter by City"
          onChange={(e) => onCityChange(e.target.value || null)}
        >
          <MenuItem value="">
            <em>All Cities</em>
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedCity && (
        <Chip
          label={`Filtered: ${selectedCity}`}
          onDelete={onClear}
          deleteIcon={<ClearIcon />}
          color="primary"
          variant="outlined"
        />
      )}

      {selectedCity && (
        <Button
          variant="text"
          onClick={onClear}
          startIcon={<ClearIcon />}
          size="small"
        >
          Clear All
        </Button>
      )}
    </Box>
  );
}
