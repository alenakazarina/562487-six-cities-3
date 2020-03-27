import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import {APP_USERS} from '../../mocks/const';
import {Favorites} from './favorites';

describe(`Favorites`, () => {
  it(`should render Favorites with no empty favorites offers`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <Favorites
              isAuth
              user={APP_USERS[0]}
              isEmpty={false}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Favorites with empty favorites offers`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <Favorites
              isAuth
              user={APP_USERS[0]}
              isEmpty
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

