import type { PublicConfig } from "./hooks";

/** Used until GET /api/v1/config resolves (and against an older API). The
 *  server list is authoritative; this mirrors Backend `IMAGE_EXTS`. */
export const FALLBACK_IMAGE_EXTS = [
  ".png", ".apng", ".jpg", ".jpeg", ".jpe", ".jfif", ".webp", ".gif", ".avif",
  ".heic", ".heif", ".tif", ".tiff", ".bmp", ".ico", ".jxl", ".jp2", ".jpx",
  ".jpm", ".psd", ".dng", ".cr2", ".cr3", ".nef", ".arw", ".orf", ".raf", ".rw2",
];

/** Image extensions the server accepts, from GET /api/v1/config. */
export function imageExts(config?: PublicConfig | null): string[] {
  const fromServer = config?.uploadFormats?.image;
  return fromServer?.length ? fromServer : FALLBACK_IMAGE_EXTS;
}

/** True when `fileName` ends in one of the accepted extensions (case-insensitive). */
export function hasAllowedExtension(fileName: string, exts: string[]): boolean {
  const lower = fileName.toLowerCase();
  return exts.some((ext) => lower.endsWith(ext));
}

/** Short hint for helper text — the full list lives in the file picker. */
export const IMAGE_FORMAT_HINT = "JPG, PNG, WebP, GIF, AVIF, HEIC and more";
