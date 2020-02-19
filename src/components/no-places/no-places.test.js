import React from 'react';
import renderer from 'react-test-renderer';
import NoPlaces from './no-places';
import {mockCity} from '../../mocks/tests';

describe(`NoPlaces`, () => {
  it(`should render NoPlaces correctly`, () => {
    const tree = renderer.create(
        <NoPlaces city={mockCity} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
