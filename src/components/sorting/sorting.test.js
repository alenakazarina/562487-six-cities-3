import React from 'react';
import renderer from 'react-test-renderer';
import Sorting from './sorting.jsx';

it(`should render Sorting correctly`, () => {
  const tree = renderer.create(
      <Sorting />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
