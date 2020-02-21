import React from 'react';
import renderer from 'react-test-renderer';
import Price from './price';

const prices = [200, 300];
const prefixes = [`place-card`, `property`];

describe(`Rating`, () => {
  it(`should render place card's Price`, () => {
    const tree = renderer.create(
        <Price prefix={prefixes[0]} price={prices[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render property's Price`, () => {
    const tree = renderer.create(
        <Price prefix={prefixes[1]} price={prices[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
