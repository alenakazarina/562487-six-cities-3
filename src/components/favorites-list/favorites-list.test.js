import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesList from './favorites-list';
import {cityOffers} from '../../mocks/tests';

describe(`FavoritesList`, () => {
  it(`should render FavoritesList correctly`, () => {
    const tree = renderer.create(
        <FavoritesList
          favorites={cityOffers}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

