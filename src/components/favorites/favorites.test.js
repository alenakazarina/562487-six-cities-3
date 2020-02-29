import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from './favorites';
import {cityOffers} from '../../mocks/tests';

describe(`Favorites`, () => {
  it(`should render Favorites with no empty favorites offers`, () => {
    const tree = renderer.create(
        <Favorites
          favorites={cityOffers}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Favorites with empty favorites offers`, () => {
    const tree = renderer.create(
        <Favorites
          favorites={[]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

