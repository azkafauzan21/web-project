import axios from 'axios';
import { format, subDays } from 'date-fns';

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
const NASA_DONKI_BASE_URL = 'https://api.nasa.gov/DONKI';

export const spaceWeatherService = {
  // Fetch Coronal Mass Ejections (CME) from NASA DONKI
  async getCMEAlerts(days = 30) {
    const endDate = new Date();
    const startDate = subDays(endDate, days);
    
    try {
      const response = await axios.get(`${NASA_DONKI_BASE_URL}/CME`, {
        params: {
          startDate: format(startDate, 'yyyy-MM-dd'),
          endDate: format(endDate, 'yyyy-MM-dd'),
          api_key: NASA_API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching DONKI CME data:", error);
      return [];
    }
  },

  // Fetch Solar Flares from NASA DONKI
  async getSolarFlares(days = 30) {
    const endDate = new Date();
    const startDate = subDays(endDate, days);
    
    try {
      const response = await axios.get(`${NASA_DONKI_BASE_URL}/FLR`, {
        params: {
          startDate: format(startDate, 'yyyy-MM-dd'),
          endDate: format(endDate, 'yyyy-MM-dd'),
          api_key: NASA_API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching DONKI FLR data:", error);
      return [];
    }
  },

  // Fetch Observed Solar Cycle Indices from NOAA
  async getNOAASunspotData() {
    try {
      const response = await axios.get('https://services.swpc.noaa.gov/json/solar-cycle/observed-solar-cycle-indices.json');
      return response.data;
    } catch (error) {
      console.error("Error fetching NOAA Sunspot data:", error);
      return [];
    }
  }
};
