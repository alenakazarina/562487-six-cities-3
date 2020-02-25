import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSort, {getSortedOffers} from './with-sort';
import {SortType} from '../../const';
import {cityOffers} from '../../mocks/tests';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withSort(MockComponent);

describe(`withSort HOC`, () => {
  it(`should change active sort type of wrapped component`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          offers={cityOffers}
        />
    );
    expect(wrapper.props().activeSortType).toBe(SortType.POPULAR);
    wrapper.props().onSortTypeChange(SortType.TOP_RATED);
    expect(wrapper.props().activeSortType).toBe(SortType.TOP_RATED);
  });
});

describe(`getSortedOffers`, () => {
  it(`should return initial offers sorted by Popular sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.POPULAR)).toEqual(cityOffers);
  });

  it(`should return offers sorted by Price: low to high sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.PRICE_TO_HIGH)).toEqual(cityOffers);
  });

  it(`should return offers sorted by Price: high to low sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.PRICE_TO_LOW)).toEqual(cityOffers.reverse());
  });

  it(`should return offers sorted by Top rated first sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.TOP_RATED)).toEqual(cityOffers);
  });
});
