import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sort from './sort';
import {SortType} from '../../const';

const mockFn = () => {};

configure({
  adapter: new Adapter(),
});

describe(`Sort`, () => {
  it(`should span toggle be pressed`, () => {
    const onToggleClick = jest.fn();
    const sort = shallow(
        <Sort
          isActive={false}
          onToggleClick={onToggleClick}
          activeSortType={SortType.TOP_RATED}
          onSortTypeChange={(mockFn)}
        />
    );
    sort.find(`span.places__sorting-type`).simulate(`click`);
    expect(onToggleClick).toHaveBeenCalledTimes(1);
  });

  it(`should sortList when open be pressed`, () => {
    const onToggleClick = jest.fn();
    const sort = shallow(
        <Sort
          isActive={true}
          onToggleClick={onToggleClick}
          activeSortType={SortType.TOP_RATED}
          onSortTypeChange={(mockFn)}
        />
    );
    sort.find(`ul.places__options`).simulate(`click`);
    expect(onToggleClick).toHaveBeenCalledTimes(1);
  });
});
