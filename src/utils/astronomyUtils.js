import { format, subDays, addDays } from "date-fns";

export const getAsteroidDateRange = () => {
  const today = new Date();
  const nextWeek = addDays(today, 7);
  return {
    startDate: format(today, "yyyy-MM-dd"),
    endDate: format(nextWeek, "yyyy-MM-dd"),
  };
};

export const formatDistance = (lunarDistance) => {
  return parseFloat(lunarDistance).toFixed(2) + " LD";
};

export const formatVelocity = (velocity) => {
  return parseFloat(velocity).toFixed(2) + " km/s";
};

export const formatDiameter = (min, max) => {
  return `${parseFloat(min).toFixed(2)} - ${parseFloat(max).toFixed(2)} m`;
};
