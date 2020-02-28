import React from 'react';
import renderer from 'react-test-renderer';
import Cities from './cities';
import {cityOffers} from '../../mocks/tests';

const mockFn = () => {};
const city = `Brussels`;

describe(`Cities`, () => {
  it(`should render Cities with no empty offers`, () => {
    const tree = renderer.create(
        <Cities
          offers={cityOffers}
          activeCity={city}
          activeOffer={null}
          onTitleClick={mockFn}
          onCardHoverChange={mockFn}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Cities with empty offers`, () => {
    const tree = renderer.create(
        <Cities
          offers={[]}
          activeCity={city}
          activeOffer={null}
          onTitleClick={mockFn}
          onCardHoverChange={mockFn}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

