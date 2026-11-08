import { FAQ_ITEMS } from '../content/faq';
import { SITE_NAME, SITE_URL, OG_IMAGE_URL } from './seo';

const HOME_URL = `${SITE_URL}/`;

const author = {
  '@type': 'Person',
  name: 'Daniel Rogowski',
  url: 'https://danielrogowski.net/',
  affiliation: {
    '@type': 'Organization',
    name: 'Bydgoszcz University of Science and Technology',
    url: 'https://pbs.edu.pl',
  },
};

const faqEntities = FAQ_ITEMS.map(({ question, answer }) => ({
  '@type': 'Question',
  name: question,
  acceptedAnswer: { '@type': 'Answer', text: answer },
}));

const website = {
  '@type': 'WebSite',
  '@id': `${HOME_URL}#website`,
  url: HOME_URL,
  name: SITE_NAME,
  inLanguage: 'en',
  author,
};

const webApplication = {
  '@type': 'WebApplication',
  '@id': `${HOME_URL}#app`,
  name: SITE_NAME,
  description:
    'Free online converter between decimal numbers and Maya numerals (base 20), in both directions, with a place-value breakdown for every result.',
  url: HOME_URL,
  image: OG_IMAGE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any (web browser)',
  inLanguage: 'en',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author,
  featureList: [
    'Decimal to Maya numeral conversion',
    'Maya numeral to decimal conversion',
    'Live results while typing',
    'Base-20 place-value breakdown',
    'Maya numerals chart from 0 to 19',
    'Copy results as Unicode Maya numeral characters (U+1D2E0 to U+1D2F3)',
  ],
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': `${HOME_URL}#faq`,
  mainEntity: faqEntities,
};

const homeGraph = {
  '@context': 'https://schema.org',
  '@graph': [website, webApplication, faqPage],
};

export const homeLdJson = JSON.stringify(homeGraph);
