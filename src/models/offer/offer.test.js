import Offer from './offer';
import {API_MOCK_OFFERS, LOCATIONS, SENTENCES, GOODS, IMAGES,
  TITLES, OFFER_TYPES} from '../../mocks/const';

const RAW_OFFER = API_MOCK_OFFERS[0];
const OFFER = {
  bedrooms: 3,
  city: LOCATIONS[1],
  description: SENTENCES[1],
  amenities: GOODS,
  host: {
    avatarUrl: `avatar`,
    id: 1,
    isPro: true,
    name: `Alena`
  },
  id: 1,
  images: IMAGES,
  isFavorite: true,
  isPremium: true,
  location: LOCATIONS[1],
  maxAdults: 3,
  previewImage: IMAGES[0],
  price: 600,
  rating: 3,
  title: TITLES[1],
  type: OFFER_TYPES[1]
};

describe(`Offer model`, () => {
  it(`Offer model should create an offer`, () => {
    expect(new Offer(RAW_OFFER)).toEqual(OFFER);
  });
});

