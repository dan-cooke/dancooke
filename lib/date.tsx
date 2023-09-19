export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date);
}
