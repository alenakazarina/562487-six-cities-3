import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';

const offer = {
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
    id: `01`,
    name: `James`,
    isPro: true,
    avatarUrl: `avatar`
  },
  description: `House description`,
  reviews: [{
    id: `01`,
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
};

const prefixes = [`cities__`, `near-places__`];

describe(`PlaceCard`, () => {
  it(`should render cities PlaceCard`, () => {
    const tree = renderer.create(
        <PlaceCard
          prefix={prefixes[0]}
          offer={offer}
          onTitleClick={()=>{}}
          onCardMouseOver={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render near places PlaceCard`, () => {
    const tree = renderer.create(
        <PlaceCard
          prefix={prefixes[1]}
          offer={offer}
          onTitleClick={()=>{}}
          onCardMouseOver={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
