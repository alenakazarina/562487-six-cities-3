import React from 'react';
import renderer from 'react-test-renderer';
import LocationTab from './location-tab';

const locations = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

describe(`LocationTab`, () => {
  it(`should render LocationTab correctly`, () => {
    const tree = renderer.create(
        <LocationTab
          location={locations[1]}
          isActive={false}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LocationTab with active class correctly`, () => {
    const tree = renderer.create(
        <LocationTab
          location={locations[0]}
          isActive={true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
