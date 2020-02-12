import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {locations, offers} from '../../mock/tests';

it(`should render App correctly`, () => {
  const tree = renderer.create(
      <App locations={locations} offers={offers} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
