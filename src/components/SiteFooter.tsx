import { Link } from 'react-router';
import { OPEN_COOKIE_SETTINGS_EVENT } from '../lib/consent';

export default function SiteFooter() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__about">
          <p className="site-footer__name">Maya Numeral Converter</p>
          <p>
            A free educational tool for converting between decimal numbers and Maya numerals. Created by{' '}
            <a href="https://danielrogowski.net/" target="_blank" rel="noopener">
              Daniel Rogowski
            </a>
            ,{' '}
            <a href="https://pbs.edu.pl" target="_blank" rel="noopener">
              Bydgoszcz University of Science and Technology
            </a>
            , Poland.
          </p>
        </div>
        <nav className="site-footer__links" aria-label="Footer">
          <ul>
            <li>
              <Link to="/privacy-policy/">Privacy policy</Link>
            </li>
            <li>
              <button type="button" className="link-button" onClick={openCookieSettings}>
                Cookie settings
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
