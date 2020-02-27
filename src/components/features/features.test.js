import React from 'react';
import renderer from 'react-test-renderer';
import Features from './features';

const features = [
  {
    type: `Apartment`,
    bedrooms: 3,
    maxAdults: 6
  },
  {
    type: `House`,
    bedrooms: 1,
    maxAdults: 1
  },
];

describe(`Features`, () => {
  it(`should render Features with correct plural nouns`, () => {
    const tree = renderer.create(
        <Features features={features[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render Features with correct singular nouns`, () => {
    const tree = renderer.create(
        <Features features={features[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
