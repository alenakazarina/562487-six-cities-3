import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Sort from './sort';
import {SortType} from '../../const';

const mockFn = jest.fn();

describe(`Sort`, () => {
  it(`should render opened Sort with active sort type - top rated`, () => {
    const tree = renderer.create(
        <Sort
          isActive={true}
          onToggleClick={mockFn}
          activeSortType={SortType.TOP_RATED}
          onSortTypeChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render closed Sort with active sort type - top rated`, () => {
    const tree = renderer.create(
        <Sort
          isActive={false}
          onToggleClick={mockFn}
          activeSortType={SortType.TOP_RATED}
          onSortTypeChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
