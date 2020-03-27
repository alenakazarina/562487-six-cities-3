import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import SortItem from './sort-item';
import {SortType} from '../../const';

const sortType = SortType.TOP_RATED;

configure({
  adapter: new Adapter(),
});

describe(`SortItem`, () => {
  it(`should sortItem no active be pressed and invoke callback with its sorttype as an argument`, () => {
    const onSortTypeChange = jest.fn();
    const sort = shallow(
        <SortItem
          isActive={false}
          sortType={sortType}
          onSortTypeChange={onSortTypeChange}
        />
    );
    sort.find(`li.places__option`).simulate(`click`);
    expect(onSortTypeChange).toHaveBeenCalledTimes(1);
    expect(onSortTypeChange.mock.calls[0][0]).toBe(sortType);
  });

  it(`should sortItem no active be pressed and does not invoke callback`, () => {
    const onSortTypeChange = jest.fn();
    const sort = shallow(
        <SortItem
          isActive={true}
          sortType={sortType}
          onSortTypeChange={onSortTypeChange}
        />
    );
    sort.find(`li.places__option`).simulate(`click`);
    expect(onSortTypeChange).toHaveBeenCalledTimes(0);
  });
});
