import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';
import {cityOffers} from '../../mocks/tests';

const prefixes = [`cities`, `near-places`];
const mockFn = () => {};

describe(`PlacesList`, () => {
  it(`should render cities PlacesList`, () => {
    const tree = renderer.create(
        <PlacesList
          prefix={prefixes[0]}
          offers={cityOffers}
          onTitleClick={mockFn}
          onCardHoverChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render near places PlacesList`, () => {
    const tree = renderer.create(
        <PlacesList
          prefix={prefixes[1]}
          offers={cityOffers}
          onTitleClick={mockFn}
          onCardHoverChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
