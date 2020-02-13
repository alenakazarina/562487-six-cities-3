import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const defaultOffers = [
  {
    id: `01`,
    previewImage: `image`,
    title: `title`,
    isFavorite: true,
    isPremium: false,
    rating: 2,
    type: `House`,
    price: 500
  },
  {
    id: `02`,
    previewImage: `image`,
    title: `title`,
    isFavorite: false,
    isPremium: true,
    rating: 5,
    type: `Hotel`,
    price: 1000
  }
];

const offers = [
  {
    city: `Paris`,
    offers: defaultOffers
  },
  {
    city: `Cologne`,
    offers: defaultOffers
  },
  {
    city: `Brussels`,
    offers: defaultOffers
  },
  {
    city: `Amsterdam`,
    offers: defaultOffers
  },
  {
    city: `Hamburg`,
    offers: defaultOffers
  },
  {
    city: `Dusseldorf`,
    offers: defaultOffers
  }
];

it(`should render App correctly`, () => {
  const tree = renderer.create(
      <App offers={offers} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
