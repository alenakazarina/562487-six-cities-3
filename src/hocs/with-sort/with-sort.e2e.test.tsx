import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import withSort from './with-sort';
import {SortType} from '../../const';
import {CITY_OFFERS} from '../../mocks/const';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withSort(MockComponent);

describe(`withSort HOC`, () => {
  it(`should change active sort type of wrapped component`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          offers={CITY_OFFERS}
        />
    );
    expect(wrapper.props().activeSortType).toBe(SortType.POPULAR);
    wrapper.props().onSortTypeChange(SortType.TOP_RATED);
    expect(wrapper.props().activeSortType).toBe(SortType.TOP_RATED);
  });
});
