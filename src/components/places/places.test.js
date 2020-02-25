import React from 'react';
import renderer from 'react-test-renderer';
import Places from './places';
import {cityOffers} from '../../mocks/tests';
import {SortType} from '../../const';

const city = `Amsterdam`;
const mockFn = () => {};

describe(`Places`, () => {
  it(`should render Places correctly`, () => {
    const tree = renderer.create(
        <Places
          city={city}
          offers={cityOffers}
          activeSortType={SortType.POPULAR}
          onTitleClick={mockFn}
          onSortTypeChange={mockFn}
          onCardMouseOver={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
