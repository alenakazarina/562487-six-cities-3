import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import {CITY_OFFERS} from '../../mocks/const';

const PREFIXES = [`cities`, `property`];

describe(`Map`, () => {
  it(`should render cities Map correctly`, () => {
    const tree = renderer.create(
        <Map
          prefix={PREFIXES[0]}
          offers={CITY_OFFERS}
          activeOffer={CITY_OFFERS[0]}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render property Map correctly`, () => {
    const tree = renderer.create(
        <Map
          prefix={PREFIXES[1]}
          offers={CITY_OFFERS}
          activeOffer={CITY_OFFERS[1]}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
