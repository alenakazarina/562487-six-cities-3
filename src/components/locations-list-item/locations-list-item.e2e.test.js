import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LocationsListItem} from './locations-list-item';

const city = `Amsterdam`;

configure({
  adapter: new Adapter(),
});

describe(`LocationsListItem`, () => {
  it(`should LocationsListItem be pressed and invoke callback fn`, () => {
    const setActiveCity = jest.fn();
    const locationsListItem = shallow(
        <LocationsListItem
          nodeType="li"
          city={city}
          isActive={false}
          setActiveCity={setActiveCity}
        />
    );
    locationsListItem.find(`a.locations__item-link`).simulate(`click`);
    expect(setActiveCity).toHaveBeenCalledTimes(1);
  });
});

