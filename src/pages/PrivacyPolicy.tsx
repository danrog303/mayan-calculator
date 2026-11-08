import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { buildMeta } from '../lib/seo';

export const meta: MetaFunction = () =>
  buildMeta({
    title: 'Privacy Policy | Maya Numeral Converter',
    description: 'Privacy policy and GDPR information for the Maya Numeral Converter: what analytics data is collected, cookies, and your rights.',
    path: '/privacy-policy/',
  });

const LAST_UPDATED = 'November 2026';

const NOT_COLLECTED: readonly string[] = [
  'Names, email addresses, or any directly identifying information',
  'Payment or financial data',
  'Content you enter into the converter (numbers are processed locally in your browser)',
];

const ANALYTICS_DATA: readonly string[] = [
  'Pages visited and time spent on each page',
  'Approximate geographic location (country/city level only)',
  'Device type, operating system, and browser',
  'Traffic source (e.g. search engine, direct)',
  'Session duration and interaction patterns',
];

type CookieRow = { name: string; purpose: string; expiry: string };

const COOKIES: readonly CookieRow[] = [
  { name: '_ga', purpose: 'Distinguishes unique users', expiry: '2 years' },
  { name: '_ga_*', purpose: 'Maintains session state for Google Analytics 4', expiry: '2 years' },
];

type Right = { right: string; desc: string };

const RIGHTS: readonly Right[] = [
  { right: 'Right of access', desc: 'You may request a copy of the data we hold about you.' },
  { right: 'Right to erasure', desc: 'You may request deletion of your personal data ("right to be forgotten").' },
  { right: 'Right to restriction', desc: 'You may request that we restrict processing of your data in certain circumstances.' },
  { right: 'Right to object', desc: 'You may object to processing based on legitimate interests.' },
  {
    right: 'Right to withdraw consent',
    desc: 'You may withdraw your analytics consent at any time, without affecting the lawfulness of prior processing.',
  },
  {
    right: 'Right to lodge a complaint',
    desc: 'You have the right to lodge a complaint with the Polish supervisory authority: the President of the Personal Data Protection Office (UODO), ul. Stawki 2, 00-193 Warsaw, Poland, uodo.gov.pl.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="page">
      <main id="main" className="page__main prose">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Converter</Link>
            </li>
            <li aria-current="page">Privacy policy</li>
          </ol>
        </nav>

        <h1>Privacy Policy</h1>
        <p className="meta-line">Last updated: {LAST_UPDATED}</p>

        <h2>1. Overview</h2>
        <p>
          This privacy policy explains how Maya Numeral Converter (available at{' '}
          <a href="https://mayacalc.danielrogowski.net/">mayacalc.danielrogowski.net</a>) collects and processes
          personal data. We are committed to protecting your privacy and handling your data in full compliance with
          the General Data Protection Regulation (GDPR) and applicable Polish data protection law.
        </p>
        <p>
          This website is a free educational tool. We collect minimal data and only with your explicit consent. You
          may use the converter without accepting any cookies.
        </p>

        <h2>2. Data Controller</h2>
        <p>The data controller responsible for your personal data is:</p>
        <address className="panel">
          <strong>Daniel Rogowski</strong>
          <br />
          Bydgoszcz University of Science and Technology
          <br />
          Bydgoszcz, Poland
          <br />
          Website:{' '}
          <a href="https://danielrogowski.net/" target="_blank" rel="noopener">
            danielrogowski.net
          </a>
        </address>

        <h2>3. What Data We Collect</h2>
        <p>
          We only collect analytics data, and only if you explicitly consent. We do <strong>not</strong> collect:
        </p>
        <ul>
          {NOT_COLLECTED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>If you consent to analytics, Google Analytics collects the following anonymous data:</p>
        <ul>
          {ANALYTICS_DATA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>All data is collected with IP anonymization enabled. Your full IP address is never stored.</p>

        <h2>4. Legal Basis for Processing</h2>
        <p>
          Analytics data is processed solely on the basis of your <strong>freely given, informed consent</strong>{' '}
          (Article 6(1)(a) of the GDPR). The cookie consent banner appears when you first visit the site. You may
          accept or decline, and you may change your choice at any time with the "Cookie settings" link at the
          bottom of every page, or by clearing your browser's local storage or cookies.
        </p>
        <p>If you decline or ignore the banner, no analytics cookies are set and no data is sent to Google Analytics.</p>

        <h2>5. Third-Party Service: Google Analytics</h2>
        <p>
          With your consent, this site uses Google Analytics 4, provided by Google Ireland Limited (Gordon House,
          Barrow Street, Dublin 4, Ireland). Google acts as a data processor on our behalf under Google's Data
          Processing Terms.
        </p>
        <p>
          Google may transfer analytics data to servers in the United States and other countries. Such transfers are
          covered by Standard Contractual Clauses approved by the European Commission. For more information, see{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            Google's Privacy Policy
          </a>
          .
        </p>

        <h2>6. Cookies</h2>
        <p>
          Cookies are only placed if you accept analytics. No cookies are used for advertising, profiling, or any
          purpose other than anonymous usage statistics.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption className="visually-hidden">Cookies set after consent</caption>
            <thead>
              <tr>
                <th scope="col">Cookie</th>
                <th scope="col">Purpose</th>
                <th scope="col">Expiry</th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((cookie) => (
                <tr key={cookie.name}>
                  <th scope="row">
                    <code>{cookie.name}</code>
                  </th>
                  <td>{cookie.purpose}</td>
                  <td className="nowrap">{cookie.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          You can delete existing cookies at any time through your browser settings. You can also withdraw consent by
          clearing the key <code>gdpr-analytics-consent</code> from your browser's local storage.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Analytics data is retained in Google Analytics for 26 months, after which it is automatically deleted.
          Aggregated, anonymized reports may be retained indefinitely. We do not maintain any separate database of
          personal data.
        </p>

        <h2>8. Your Rights Under GDPR</h2>
        <p>As a data subject, you have the following rights regarding your personal data:</p>
        <ul>
          {RIGHTS.map((item) => (
            <li key={item.right}>
              <strong>{item.right}:</strong> {item.desc}
            </li>
          ))}
        </ul>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. The "Last updated" date at the top of this page will
          always reflect the most recent revision. Continued use of the site after changes are posted constitutes
          acceptance of the updated policy.
        </p>

        <p className="prose__back">
          <Link to="/" className="button button--primary">
            Back to the converter
          </Link>
        </p>
      </main>
    </div>
  );
}
