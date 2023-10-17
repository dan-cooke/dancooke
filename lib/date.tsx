import { formatDistance as _formatDistance } from "date-fns";

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date);
}

export function formatDistance(startDate: Date, endDate?: Date) {
  if (!endDate) {
    return `${formatDate(startDate)} - Present ${_formatDistance(
      new Date(),
      startDate,
    )}`;
  }

  return `${_formatDistance(
    endDate,
    startDate,
  )} (${startDate.getFullYear()} - ${endDate.getFullYear()})`;
}
