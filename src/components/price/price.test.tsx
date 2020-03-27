import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Price from './price';

const PRICES = [200, 300];
const PREFIXES = [`place-card`, `property`];

describe(`Rating`, () => {
  it(`should render place card's Price`, () => {
    const tree = renderer.create(
        <Price prefix={PREFIXES[0]} price={PRICES[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render property's Price`, () => {
    const tree = renderer.create(
        <Price prefix={PREFIXES[1]} price={PRICES[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
