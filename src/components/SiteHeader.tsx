import { Link, useLocation } from 'react-router';

type NavItem = { hash: string; label: string };

const NAV_ITEMS: readonly NavItem[] = [
  { hash: '#converter', label: 'Converter' },
  { hash: '#chart', label: 'Chart 0-19' },
  { hash: '#how-to', label: 'How to convert' },
  { hash: '#faq', label: 'FAQ' },
];

/** Logo mark: the Maya numeral 7 (two dots over a bar) in a rounded tile. */
function LogoMark() {
  return (
    <svg className="logo-mark" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <circle cx="12" cy="12" r="2.75" className="logo-mark__ink" />
      <circle cx="20" cy="12" r="2.75" className="logo-mark__ink" />
      <rect x="7" y="18" width="18" height="5" rx="1.5" className="logo-mark__ink" />
    </svg>
  );
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  // On the home page a bare hash keeps the ?n= query, so the current conversion survives in-page jumps.
  const anchorBase = pathname === '/' ? '' : '/';

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand">
          <LogoMark />
          <span className="brand__name">Maya Numeral Converter</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.hash}>
                <a href={`${anchorBase}${item.hash}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
