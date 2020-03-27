import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PremiumMark from './premium-mark';

const PREFIX = `place-card`;

describe(`PremiumMark`, () => {
  it(`should render PremiumMark correctly`, () => {
    const tree = renderer.create(
        <PremiumMark prefix={PREFIX} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
