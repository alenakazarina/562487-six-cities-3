import {instanceOf, shape, number, string, bool, arrayOf, oneOfType, element, node} from 'prop-types';

export const childrenPropTypes = oneOfType([element, node]);

export const appUserPropTypes = shape({
  id: number.isRequired,
  email: string.isRequired,
  name: string.isRequired,
  isPro: bool.isRequired,
  avatarUrl: string.isRequired
}).isRequired;

export const userPropTypes = shape({
  id: number.isRequired,
  name: string.isRequired,
  isPro: bool.isRequired,
  avatarUrl: string.isRequired
}).isRequired;

export const reviewPropTypes = shape({
  id: number.isRequired,
  user: userPropTypes,
  rating: number.isRequired,
  comment: string.isRequired,
  date: instanceOf(Date).isRequired
});

export const cityPropTypes = shape({
  name: string.isRequired,
  location: shape({
    latitude: number.isRequired,
    longitude: number.isRequired
  }).isRequired
}).isRequired;

export const offerPropTypes = shape({
  id: number.isRequired,
  previewImage: string.isRequired,
  title: string.isRequired,
  images: arrayOf(string).isRequired,
  isFavorite: bool.isRequired,
  isPremium: bool.isRequired,
  rating: number.isRequired,
  type: string.isRequired,
  bedrooms: number.isRequired,
  maxAdults: number.isRequired,
  price: number.isRequired,
  amenities: arrayOf(string).isRequired,
  host: userPropTypes,
  description: string.isRequired,
  city: cityPropTypes
});
