import React from 'react';
import renderer from 'react-test-renderer';
import LocationTab from './location-tab';
import {locations} from '../../mock/tests';

it(`should render LocationTab correctly`, () => {
  const tree = renderer.create(
      <LocationTab location={locations[1]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`should render LocationTab with active class correctly`, () => {
  const tree = renderer.create(
      <LocationTab location={locations[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
