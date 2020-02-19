import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';
import {appOffers} from '../../mocks/tests';

const prefixes = [`cities`, `near-places`];

describe(`PlacesList`, () => {
  it(`should render cities PlacesList`, () => {
    const tree = renderer.create(
        <PlacesList
          prefix={prefixes[0]}
          offers={appOffers[0].offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render near places PlacesList`, () => {
    const tree = renderer.create(
        <PlacesList
          prefix={prefixes[1]}
          offers={appOffers[0].offers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
