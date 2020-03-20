import React from 'react';
import renderer from 'react-test-renderer';
import PropertyDescription from './property-description';

const DESCRIPTION = `Property description`;

describe(`PropertyDescription`, () => {
  it(`should render PropertyDescription correctly`, () => {
    const tree = renderer.create(
        <PropertyDescription description={DESCRIPTION} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
