import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import Places from './places';
import {cityOffers} from '../../mocks/const';
import {SortType} from '../../const';

const mockFn = () => {};

describe(`Places`, () => {
  it(`should render Places correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Places
              offers={cityOffers}
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
