import React from 'react';
import renderer from 'react-test-renderer';
import NoPlaces from './no-places';

const CITY = `Amsterdam`;

describe(`NoPlaces`, () => {
  it(`should render NoPlaces correctly`, () => {
    const tree = renderer.create(
        <NoPlaces city={CITY} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
