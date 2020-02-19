import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {appOffers} from '../../mocks/tests';

it(`should render App correctly`, () => {
  const tree = renderer.create(
      <App offers={appOffers} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
