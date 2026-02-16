import { transformStations } from "./transformers";
import { GetStationsResponse, RawStation } from "./types";

const STATIONS_API_URL = "/api/stations";

export const stationsApi = {
  getAll: async (): Promise<GetStationsResponse> => {
    try {
      console.log("Fetching from:", STATIONS_API_URL);

      const response = await fetch(STATIONS_API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rawData: RawStation[] = await response.json();
      console.log("API Response:", rawData);

      const stations = transformStations(rawData);

      return {
        data: stations,
        metadata: {
          total: stations.length,
        },
      };
    } catch (error) {
      console.error("[Stations API] Error:", error);
      throw error;
    }
  },
};
