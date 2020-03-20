import React from 'react';
import renderer from 'react-test-renderer';
import PremiumMark from './premium-mark';

const PREFIXES = [`place-card`, `property`];

describe(`PremiumMark`, () => {
  it(`should render place card's PremiumMark`, () => {
    const tree = renderer.create(
        <PremiumMark prefix={PREFIXES[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render property's PremiumMark`, () => {
    const tree = renderer.create(
        <PremiumMark prefix={PREFIXES[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
