import React from 'react';
import renderer from 'react-test-renderer';
import Places from './places';
import {appOffers} from '../../mocks/tests';

const {city, offers} = appOffers[0];

describe(`Places`, () => {
  it(`should render Places correctly`, () => {
    const tree = renderer.create(
        <Places
          city={city}
          offers={offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
