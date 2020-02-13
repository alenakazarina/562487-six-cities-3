import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';

const offers = [
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

describe(`PlaceCard`, () => {
  it(`should render PlaceCard of Favorite House with rating equals 2`, () => {
    const tree = renderer.create(
        <PlaceCard
          offer={offers[0]}
          onTitleClick={()=>{}}
          onCardMouseOver={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render PlaceCard of Premium Hotel with rating equals 5`, () => {
    const tree = renderer.create(
        <PlaceCard
          offer={offers[1]}
          onTitleClick={()=>{}}
          onCardMouseOver={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
