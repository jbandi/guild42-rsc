export function timestampWithMillis(date: Date) {
  return date.toLocaleTimeString("de-CH") + "." + date.getMilliseconds();
}
