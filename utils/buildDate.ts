import format from "date-fns/format";
import differenceInMonths from "date-fns/differenceInMonths";

export const buildDate = (start: Date, end: Date): string => {
  const startDate = format(start, "MMM, yyyy");
  const endDate = format(end, "MMM, yyyy");
  const months = differenceInMonths(end, start);

  return `${startDate} - ${endDate} (${months} Month${months > 1 ? "s" : ""})`;
};
