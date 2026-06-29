import axios from "axios";
import { getAsteroidDateRange } from "../utils/astronomyUtils";

const API_KEY = import.meta.env.VITE_NASA_API_KEY && import.meta.env.VITE_NASA_API_KEY !== "YOUR_NASA_API_KEY" 
  ? import.meta.env.VITE_NASA_API_KEY 
  : "DEMO_KEY";
const BASE_URL = "https://api.nasa.gov/neo/rest/v1";

export const fetchNeoFeed = async () => {
  const { startDate, endDate } = getAsteroidDateRange();
  try {
    const response = await axios.get(`${BASE_URL}/feed`, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: API_KEY,
      },
    });
    
    // Flatten and format the data
    const neoData = [];
    const nearEarthObjects = response.data.near_earth_objects;
    for (const date in nearEarthObjects) {
      nearEarthObjects[date].forEach(neo => {
        neoData.push({
          id: neo.id,
          name: neo.name,
          date: date,
          velocity: parseFloat(neo.close_approach_data[0]?.relative_velocity.kilometers_per_second || 0),
          missDistance: parseFloat(neo.close_approach_data[0]?.miss_distance.lunar || 0),
          diameterMin: parseFloat(neo.estimated_diameter.meters.estimated_diameter_min || 0),
          diameterMax: parseFloat(neo.estimated_diameter.meters.estimated_diameter_max || 0),
          isPotentiallyHazardous: neo.is_potentially_hazardous_asteroid,
        });
      });
    }
    
    // Sort by date ascending
    return neoData.sort((a, b) => new Date(a.date) - new Date(b.date));
  } catch (error) {
    console.error("Error fetching CNEOS data:", error);
    throw error;
  }
};
