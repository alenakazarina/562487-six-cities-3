import React from 'react';
import renderer from 'react-test-renderer';
import PropertyDescription from './property-description';

const description = `Property description`;

describe(`PropertyDescription`, () => {
  it(`should render PropertyDescription correctly`, () => {
    const tree = renderer.create(
        <PropertyDescription description={description} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
