function parseSiteUrl(value: string | undefined) {
  const candidate = value?.trim();
  if (!candidate) return undefined;

  try {
    const url = new URL(candidate.includes('://') ? candidate : `https://${candidate}`);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url : undefined;
  } catch {
    return undefined;
  }
}

export const SITE_URL_OBJECT = parseSiteUrl(process.env.SITE_URL) ?? new URL('http://localhost:3000');

export const SITE_URL = SITE_URL_OBJECT.origin;
