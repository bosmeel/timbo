export function isOldIOS() {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent;

  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const isOldVersion = /OS (9|10|11|12)_/.test(ua);

  return isIOS && isOldVersion;
}