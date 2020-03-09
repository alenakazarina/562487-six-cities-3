import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import FavoritesListItem from './favorites-list-item';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import {cityOffers} from '../../mocks/const';

const mockFn = () => {};
const city = `Paris`;

describe(`FavoritesListItem`, () => {
  it(`should render FavoritesListItem correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <FavoritesListItem
              city={city}
              offers={cityOffers}
              onTitleClick={mockFn}
              onFavoriteClick={mockFn}
              onTabClick={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

