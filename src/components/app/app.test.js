import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {cityOffers} from '../../mocks/tests';

describe(`App`, () => {
  it(`should render App correctly`, () => {
    const tree = renderer.create(
        <App offers={cityOffers} />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
