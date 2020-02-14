import React from 'react';
import renderer from 'react-test-renderer';
import Features from './features';

const features = {
  type: `Apartment`,
  bedrooms: 3,
  maxAdults: 6
};

describe(`Features`, () => {
  it(`should render Features correctly`, () => {
    const tree = renderer.create(
        <Features features={features} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
