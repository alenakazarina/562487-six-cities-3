import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesListItem from './favorites-list-item';
import {cityOffers} from '../../mocks/tests';

const city = `Amsterdam`;

describe(`FavoritesListItem`, () => {
  it(`should render FavoritesListItem correctly`, () => {
    const tree = renderer.create(
        <FavoritesListItem
          city={city}
          offers={cityOffers}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

