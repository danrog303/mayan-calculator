import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router';
import Icon from './Icon';
import { CONSENT_STORAGE_KEY, OPEN_COOKIE_SETTINGS_EVENT, readConsent } from '../lib/consent';

declare global {
  interface Window {
    grantAnalyticsConsent?: () => void;
    revokeAnalyticsConsent?: () => void;
  }
}

const SHOW_DELAY_MS = 1500;

const COLLECTED_DATA: readonly string[] = [
  'Anonymous page visit data',
  'Device and browser type',
  'Time spent on the site',
  'Anonymized traffic sources',
];

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const titleId = useId();
  const detailsId = useId();

  useEffect(() => {
    const openSettings = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);

    let timer: number | undefined;
    if (readConsent() === null) {
      timer = window.setTimeout(() => setIsVisible(true), SHOW_DELAY_MS);
    }

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
      window.clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    window.grantAnalyticsConsent?.();
    setIsVisible(false);
  };

  const handleDecline = () => {
    if (window.revokeAnalyticsConsent) {
      window.revokeAnalyticsConsent();
    } else {
      try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, 'false');
      } catch {
        // Storage unavailable (private mode); the banner simply shows again next visit.
      }
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="consent" role="region" aria-labelledby={titleId}>
      <div className="consent__inner">
        <div className="consent__text">
          <h2 className="consent__title" id={titleId}>
            Cookies and analytics
          </h2>
          <p>
            We use Google Analytics to see how the converter is used. Data is anonymized and only collected if you
            accept. Read the <Link to="/privacy-policy/">privacy policy</Link>.
          </p>
          {showDetails && (
            <div className="consent__details" id={detailsId}>
              <p>What we collect:</p>
              <ul>
                {COLLECTED_DATA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>You can change your choice at any time with "Cookie settings" at the bottom of the page.</p>
            </div>
          )}
        </div>
        <div className="consent__actions">
          <button type="button" className="button button--primary" onClick={handleAccept}>
            Accept
          </button>
          <button type="button" className="button button--secondary" onClick={handleDecline}>
            Decline
          </button>
          <button
            type="button"
            className="button button--text"
            onClick={() => setShowDetails(!showDetails)}
            aria-expanded={showDetails}
            aria-controls={detailsId}
          >
            {showDetails ? 'Hide details' : 'Details'}
          </button>
        </div>
        <button type="button" className="consent__close icon-button" onClick={handleDecline} aria-label="Decline and close">
          <Icon name="clear" size={18} />
        </button>
      </div>
    </section>
  );
}
