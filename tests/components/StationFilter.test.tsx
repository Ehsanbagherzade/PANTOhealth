import React from "react";
import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StationFilter } from "@/components/StationFilter/StationFilter";

describe("StationFilter", () => {
  const mockCities = ["Berlin", "Hamburg", "Munich"];
  const mockOnCityChange = jest.fn();
  const mockOnClear = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render filter with all cities", () => {
    render(
      <StationFilter
        cities={mockCities}
        selectedCity={null}
        onCityChange={mockOnCityChange}
        onClear={mockOnClear}
      />,
    );

    expect(screen.getByLabelText(/filter by city/i)).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByLabelText(/filter by city/i));

    expect(screen.getByText("Berlin")).toBeInTheDocument();
    expect(screen.getByText("Hamburg")).toBeInTheDocument();
    expect(screen.getByText("Munich")).toBeInTheDocument();
  });

  it("should call onCityChange when city is selected", () => {
    render(
      <StationFilter
        cities={mockCities}
        selectedCity={null}
        onCityChange={mockOnCityChange}
        onClear={mockOnClear}
      />,
    );

    fireEvent.mouseDown(screen.getByLabelText(/filter by city/i));
    fireEvent.click(screen.getByText("Berlin"));

    expect(mockOnCityChange).toHaveBeenCalledWith("Berlin");
  });

  it("should show selected city chip when city is selected", () => {
    render(
      <StationFilter
        cities={mockCities}
        selectedCity="Berlin"
        onCityChange={mockOnCityChange}
        onClear={mockOnClear}
      />,
    );

    expect(screen.getByText(/filtered: berlin/i)).toBeInTheDocument();
    expect(screen.getByText(/clear all/i)).toBeInTheDocument();
  });

  it("should call onClear when clear button is clicked", () => {
    render(
      <StationFilter
        cities={mockCities}
        selectedCity="Berlin"
        onCityChange={mockOnCityChange}
        onClear={mockOnClear}
      />,
    );

    fireEvent.click(screen.getByText(/clear all/i));

    expect(mockOnClear).toHaveBeenCalled();
  });
});
