import React from 'react';
import renderer from 'react-test-renderer';
import PropertyInside from './property-inside';

const amenities = [
  `Kitchen`, `Heating`, `Washing machine`
];

describe(`PropertyInside`, () => {
  it(`should render PropertyInside correctly`, () => {
    const tree = renderer.create(
        <PropertyInside amenities={amenities} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
