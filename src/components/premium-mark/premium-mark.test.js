import React from 'react';
import renderer from 'react-test-renderer';
import PremiumMark from './premium-mark';

describe(`PremiumMark`, () => {
  it(`should render place card's PremiumMark`, () => {
    const tree = renderer.create(
        <PremiumMark prefix={`place-card__`} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render property's PremiumMark`, () => {
    const tree = renderer.create(
        <PremiumMark prefix={ `property__`} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
