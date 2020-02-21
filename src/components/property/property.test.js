import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {cityOffers, nearOffers} from '../../mocks/tests';

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Property
          offer={cityOffers[0]}
          nearOffers={nearOffers}
          onTitleClick={()=>{}}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
