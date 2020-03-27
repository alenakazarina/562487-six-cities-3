import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PropertyInside from './property-inside';

const AMENITIES = [
  `Kitchen`, `Heating`, `Washing machine`
];

describe(`PropertyInside`, () => {
  it(`should render PropertyInside correctly`, () => {
    const tree = renderer.create(
        <PropertyInside amenities={AMENITIES} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
