import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';

const offers = [{
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

const prefixes = [`cities__`, `near-places__`];

describe(`PlacesList`, () => {
  it(`should render cities PlacesList`, () => {
    const tree = renderer.create(
        <PlacesList
          prefix={prefixes[0]}
          offers={offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render near places PlacesList`, () => {
    const tree = renderer.create(
        <PlacesList
          prefix={prefixes[1]}
          offers={offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
