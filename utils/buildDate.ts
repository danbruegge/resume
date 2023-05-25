import { format } from "date-fns";

export const buildDate = (start: Date, end: Date): string[] => {
  const startDate = format(start, "MMM, yyyy");
  const endDate = format(end, "MMM, yyyy");

  return [startDate, endDate];
};
