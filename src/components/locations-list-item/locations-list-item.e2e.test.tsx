import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import {LocationsListItem} from './locations-list-item';

const CITY = `Amsterdam`;

configure({
  adapter: new Adapter(),
});

describe(`LocationsListItem`, () => {
  it(`should LocationsListItem be pressed and invoke cb with Amsterdam city`, () => {
    const onLocationsItemClick = jest.fn();
    const locationsListItem = shallow(
        <LocationsListItem
          nodeType="li"
          city={CITY}
          isActive={false}
          onLocationsItemClick={onLocationsItemClick}
        />
    );
    locationsListItem.find(`a.locations__item-link`).simulate(`click`);
    expect(onLocationsItemClick).toHaveBeenCalledTimes(1);
  });
});

