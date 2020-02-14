import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';

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

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Property
          offer={offers[0]}
          nearOffers={offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
