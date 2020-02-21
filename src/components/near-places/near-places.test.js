import React from 'react';
import renderer from 'react-test-renderer';
import NearPlaces from './near-places';
import {cityOffers} from '../../mocks/tests';

describe(`NearPlaces`, () => {
  it(`should render NearPlaces correctly`, () => {
    const tree = renderer.create(
        <NearPlaces
          offers={cityOffers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
