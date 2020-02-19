import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {appOffers, nearOffers} from '../../mocks/tests';

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Property
          offer={appOffers[0].offers[0]}
          nearOffers={nearOffers}
          onTitleClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
