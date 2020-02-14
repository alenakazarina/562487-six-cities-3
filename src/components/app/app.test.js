import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const cityOffers = [{
  id: `01`,
  previewImage: `image`,
  title: `title`,
  images: [`image`, `image`],
  isFavorite: true,
  isPremium: false,
  rating: 3,
  features: {
    type: `House`,
    bedrooms: 3,
    maxAdults: 6
  },
  price: 200,
  amenities: [`amenity`, `amenity`],
  host: {
    id: `06`,
    name: `James`,
    isPro: true,
    avatarUrl: `avatar`
  },
  description: `House description`,
  reviews: [{
    id: `110`,
    user: {
      id: `10`,
      name: `Bob`,
      isPro: false,
      avatarUrl: `avatar`
    },
    rating: 4,
    comment: `comment`,
    date: new Date(`2019-04-24`)
  }],
  city: {
    name: `Hamburg`,
    location: {
      latitude: 53.552645,
      longitude: 9.966287,
      zoom: 13
    }
  }
},
{
  id: `02`,
  previewImage: `image`,
  title: `title`,
  images: [`image`, `image`],
  isFavorite: true,
  isPremium: false,
  rating: 3,
  features: {
    type: `Hotel`,
    bedrooms: 3,
    maxAdults: 6
  },
  price: 200,
  amenities: [`amenity`, `amenity`],
  host: {
    id: `03`,
    name: `Bob`,
    isPro: true,
    avatarUrl: `avatar`
  },
  description: `Hotel description`,
  reviews: [{
    id: `05`,
    user: {
      id: `111`,
      name: `Bob`,
      isPro: false,
      avatarUrl: `avatar`
    },
    rating: 4,
    comment: `comment`,
    date: new Date(`2019-04-24`)
  }],
  city: {
    name: `Hamburg`,
    location: {
      latitude: 53.552645,
      longitude: 9.966287,
      zoom: 13
    }
  }
}];

const offers = [
  {
    city: `Paris`,
    offers: cityOffers
  },
  {
    city: `Cologne`,
    offers: cityOffers
  },
  {
    city: `Brussels`,
    offers: cityOffers
  },
  {
    city: `Amsterdam`,
    offers: cityOffers
  },
  {
    city: `Hamburg`,
    offers: cityOffers
  },
  {
    city: `Dusseldorf`,
    offers: cityOffers
  }
];

it(`should render App correctly`, () => {
  const tree = renderer.create(
      <App offers={offers} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
