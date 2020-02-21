import {shape, number, string, bool, arrayOf, instanceOf, oneOfType, element, node} from 'prop-types';

export const childrenPropTypes = oneOfType([element, node]);

export const userPropTypes = shape({
  id: string.isRequired,
  name: string.isRequired,
  isPro: bool.isRequired,
  avatarUrl: string.isRequired
}).isRequired;

export const reviewPropTypes = shape({
  id: string.isRequired,
  user: userPropTypes,
  rating: number.isRequired,
  comment: string.isRequired,
  date: instanceOf(Date)
});

export const cityPropTypes = shape({
  name: string.isRequired,
  location: shape({
    latitude: number.isRequired,
    longitude: number.isRequired
  }).isRequired
}).isRequired;

export const featuresPropTypes = shape({
  type: string.isRequired,
  bedrooms: number.isRequired,
  maxAdults: number.isRequired
});

export const offerPropTypes = shape({
  id: string.isRequired,
  previewImage: string.isRequired,
  title: string.isRequired,
  images: arrayOf(string).isRequired,
  isFavorite: bool.isRequired,
  isPremium: bool.isRequired,
  rating: number.isRequired,
  features: featuresPropTypes,
  price: number.isRequired,
  amenities: arrayOf(string).isRequired,
  host: userPropTypes,
  description: string.isRequired,
  reviews: arrayOf(reviewPropTypes).isRequired,
  city: cityPropTypes
});
