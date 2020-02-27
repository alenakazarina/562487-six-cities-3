import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {cityOffers, nearOffers} from '../../mocks/tests';

const mockFn = () => {};

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Property
          pageOffer={cityOffers[0]}
          activeOffer={null}
          nearOffers={nearOffers}
          onTitleClick={mockFn}
          onCardMouseEnter={mockFn}
          onCardMouseLeave={mockFn}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
