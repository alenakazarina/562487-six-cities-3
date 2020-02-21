import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import {cityOffers} from '../../mocks/tests';

const prefixes = [`cities`, `property`];

describe(`Map`, () => {
  it(`should render cities Map correctly`, () => {
    const tree = renderer.create(
        <Map prefix={prefixes[0]} offers={cityOffers}/>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render property Map correctly`, () => {
    const tree = renderer.create(
        <Map prefix={prefixes[1]} offers={cityOffers}/>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
