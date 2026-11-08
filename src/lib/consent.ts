export const CONSENT_STORAGE_KEY = 'gdpr-analytics-consent';
export const OPEN_COOKIE_SETTINGS_EVENT = 'open-cookie-settings';

export function readConsent(): 'true' | 'false' | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'true' || value === 'false' ? value : null;
  } catch {
    return null;
  }
}
