import React from 'react';
import renderer from 'react-test-renderer';
import LocationsListItem from './locations-list-item';

const city = `Amsterdam`;
const mockFn = () => {};

describe(`LocationsListItem`, () => {
  it(`should render LocationsListItem`, () => {
    const tree = renderer.create(
        <LocationsListItem
          city={city}
          isActive={true}
          onTabClick={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LocationsListItem with active class`, () => {
    const tree = renderer.create(
        <LocationsListItem
          city={city}
          isActive={false}
          onTabClick={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
