import React from 'react';
import renderer from 'react-test-renderer';
import NearPlaces from './near-places';
import {appOffers} from '../../mocks/tests';

describe(`NearPlaces`, () => {
  it(`should render NearPlaces correctly`, () => {
    const tree = renderer.create(
        <NearPlaces
          offers={appOffers[0].offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
