import React from 'react';
import renderer from 'react-test-renderer';
import SortItem from './sort-item';
import {SortType} from '../../const';

const sortType = Object.values(SortType)[0];
const mockFn = () => {};

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

