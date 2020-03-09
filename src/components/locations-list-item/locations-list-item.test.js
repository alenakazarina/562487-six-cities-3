import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import LocationsListItem from './locations-list-item';

const city = `Amsterdam`;
const mockFn = () => {};

describe(`LocationsListItem`, () => {
  it(`should render LocationsListItem as listItem with active class`, () => {
    const tree = renderer.create(
        <LocationsListItem
          nodeType="li"
          city={city}
          isActive={true}
          onTabClick={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LocationsListItem as div`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <LocationsListItem
            nodeType="div"
            city={city}
            isActive={false}
            onTabClick={mockFn}
          />
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
