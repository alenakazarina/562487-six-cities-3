import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import {mockCity} from '../../mocks/tests';

describe(`Map`, () => {
  it(`should render cities Map correctly`, () => {
    const tree = renderer.create(
        <Map
          prefix="cities"
          city={mockCity}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render property Map correctly`, () => {
    const tree = renderer.create(
        <Map
          prefix="property"
          city={mockCity}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
