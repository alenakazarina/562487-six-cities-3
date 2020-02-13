import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';

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

describe(`PlacesList`, () => {
  it(`should render PlacesList correctly`, () => {
    const tree = renderer.create(
        <PlacesList
          offers={offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
