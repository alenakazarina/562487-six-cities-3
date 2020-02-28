import React from 'react';
import renderer from 'react-test-renderer';
import NearPlaces from './near-places';
import {cityOffers} from '../../mocks/tests';

const mockFn = () => {};

describe(`NearPlaces`, () => {
  it(`should render NearPlaces correctly`, () => {
    const tree = renderer.create(
        <NearPlaces
          nearOffers={cityOffers}
          onTitleClick={mockFn}
          onCardHoverChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
