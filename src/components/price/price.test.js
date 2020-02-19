import React from 'react';
import renderer from 'react-test-renderer';
import Price from './price';

const prices = [200, 300];

describe(`Rating`, () => {
  it(`should render place card's Price`, () => {
    const tree = renderer.create(
        <Price prefix={`place-card`} price={prices[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render property's Price`, () => {
    const tree = renderer.create(
        <Price prefix={`property`} price={prices[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
