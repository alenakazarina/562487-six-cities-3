import React from 'react';
import renderer from 'react-test-renderer';
import Places from './places';
import {cityOffers} from '../../mocks/tests';

const city = `Amsterdam`;

describe(`Places`, () => {
  it(`should render Places correctly`, () => {
    const tree = renderer.create(
        <Places
          city={city}
          offers={cityOffers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
