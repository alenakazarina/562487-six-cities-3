import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';

describe(`Tabs`, () => {
  it(`should render Tabs correctly`, () => {
    const tree = renderer.create(
        <Tabs activeTab={`Brussels`} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
