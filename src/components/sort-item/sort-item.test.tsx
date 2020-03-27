import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SortItem from './sort-item';
import {SortType} from '../../const';

const sortType = SortType.POPULAR;
const mockFn = jest.fn();

describe(`SortItem`, () => {
  it(`should render SortItem`, () => {
    const tree = renderer.create(
        <SortItem
          isActive={false}
          sortType={sortType}
          onSortTypeChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render SortItem with active class`, () => {
    const tree = renderer.create(
        <SortItem
          isActive={true}
          sortType={sortType}
          onSortTypeChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

