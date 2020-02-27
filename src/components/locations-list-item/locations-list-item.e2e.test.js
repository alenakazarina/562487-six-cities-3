import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationsListItem from './locations-list-item';

const city = `Amsterdam`;

configure({
  adapter: new Adapter(),
});

describe(`LocationsListItem`, () => {
  it(`should LocationsListItem with no activeClass be pressed and invoke callback fn`, () => {
    const onTabClick = jest.fn();
    const locationsListItem = shallow(
        <LocationsListItem
          city={city}
          isActive={false}
          onTabClick={onTabClick}
        />
    );
    locationsListItem.find(`a.locations__item-link`).simulate(`click`);
    expect(onTabClick).toHaveBeenCalledTimes(1);
    expect(onTabClick.mock.calls[0][0]).toBe(city);
  });

  it(`should LocationsListItem with activeClass be pressed and does not invoke callback fn`, () => {
    const onTabClick = jest.fn();
    const locationsListItem = shallow(
        <LocationsListItem
          city={city}
          isActive={true}
          onTabClick={onTabClick}
        />
    );
    locationsListItem.find(`a.locations__item-link`).simulate(`click`);
    expect(onTabClick).toHaveBeenCalledTimes(0);
  });
});

