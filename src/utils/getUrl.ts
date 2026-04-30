export default function getShareUrl(path?: string) {
  if (typeof window === "undefined") return "";

  const base = window.location.origin;
  return path ? `${base}${path}` : window.location.href;
}