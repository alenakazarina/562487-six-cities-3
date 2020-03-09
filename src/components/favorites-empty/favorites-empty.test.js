import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty';

describe(`FavoritesEmpty`, () => {
  it(`should render FavoritesEmpty correctly`, () => {
    const tree = renderer.create(
        <FavoritesEmpty />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

