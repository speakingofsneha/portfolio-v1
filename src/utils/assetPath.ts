// Utility function to get the correct asset path with base URL
export function getAssetPath(path: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}
