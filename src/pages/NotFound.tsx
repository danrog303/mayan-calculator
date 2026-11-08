import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import MayaNumeral from '../components/MayaNumeral';
import { buildMeta } from '../lib/seo';
import { convertToBase20 } from '../lib/maya';

export const meta: MetaFunction = () =>
  buildMeta({
    title: '404 Page Not Found | Maya Numeral Converter',
    description: 'The page you are looking for does not exist. Go back to the Maya Numeral Converter.',
    noindex: true,
  });

const NOT_FOUND_DIGITS = convertToBase20(404);

export default function NotFound() {
  return (
    <div className="page">
      <main id="main" className="page__main not-found">
        <MayaNumeral digits={NOT_FOUND_DIGITS} size="lg" />
        <div className="not-found__text">
          <h1>404: page not found</h1>
          <p>
            This address does not exist. The numeral on the left is 404 in Maya numerals: 1 × 400, 0 × 20 and 4 × 1.
          </p>
          <p>
            <Link to="/" className="button button--primary">
              Go to the converter
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
