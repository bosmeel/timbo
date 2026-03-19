export function isOldIOS() {
  if (typeof navigator === "undefined") return false;
  return /OS 12_/.test(navigator.userAgent);
}