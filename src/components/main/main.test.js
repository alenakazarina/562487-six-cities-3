import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

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

const onTitleClick = () => {};

describe(`Main`, () => {
  it(`should render Main correctly with no empty offers`, () => {
    const tree = renderer.create(
        <Main
          city={`Paris`}
          offers={offers}
          onTitleClick={onTitleClick}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with empty offers`, () => {
    const tree = renderer.create(
        <Main
          city={`Paris`}
          offers={[]}
          onTitleClick={onTitleClick}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

