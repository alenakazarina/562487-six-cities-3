import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

configure({adapter: new Adapter()});

const MockComponent = () => (<div />);
const LocationsListMockWrapped = withActiveItem(MockComponent, `locations-list`);
const PlacesListMockWrapped = withActiveItem(MockComponent, `places-list`);
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem HOC`, () => {
  it(`should render wrapped LocationsList component`, () => {
    const wrapper = shallow(
        <LocationsListMockWrapped />
    );
    expect(wrapper.html()).not.toBe(null);
  });

  it(`should render wrapped  PlacesList component`, () => {
    const wrapper = shallow(
        <PlacesListMockWrapped />
    );
    expect(wrapper.html()).not.toBe(null);
  });

  it(`should return null in other cases`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    expect(wrapper.html()).toBe(null);
  });
});
