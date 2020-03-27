import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import FavoritesListItem from './favorites-list-item';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import {CITY_OFFERS} from '../../mocks/const';

const CITY = `Paris`;

describe(`FavoritesListItem`, () => {
  it(`should render FavoritesListItem correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <FavoritesListItem
              city={CITY}
              offers={CITY_OFFERS}
              isActive={false}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render FavoritesListItem with active location tab`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <FavoritesListItem
              city={CITY}
              offers={CITY_OFFERS}
              isActive
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

