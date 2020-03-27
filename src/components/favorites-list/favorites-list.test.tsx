import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import FavoritesList from './favorites-list';

describe(`FavoritesList`, () => {
  it(`should render FavoritesList correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <FavoritesList />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

