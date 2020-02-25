import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {cityOffers, nearOffers} from '../../mocks/tests';

const mockFn = () => {};

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Property
          offer={cityOffers[0]}
          nearOffers={nearOffers}
          onTitleClick={mockFn}
          onCardMouseOver={mockFn}
          activeOffer={null}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
