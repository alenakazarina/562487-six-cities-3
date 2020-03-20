import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import {CITY_OFFERS} from '../../mocks/const';
import {SortType} from '../../const';
import Places from './places';

const mockFn = () => {};

describe(`Places`, () => {
  it(`should render Places correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <Places
              offers={CITY_OFFERS}
              activeSortType={SortType.POPULAR}
              onTitleClick={mockFn}
              onSortTypeChange={mockFn}
              onCardHoverChange={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
