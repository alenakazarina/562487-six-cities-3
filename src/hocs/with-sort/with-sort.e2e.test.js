import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSort from './with-sort';
import {SortType} from '../../const';
import {cityOffers} from '../../mocks/const';

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
