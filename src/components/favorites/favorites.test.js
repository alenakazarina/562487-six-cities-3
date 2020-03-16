import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {storeWithAuth} from '../../mocks/tests';
import {appUsers} from '../../mocks/const';
import Favorites from './favorites';

describe(`Favorites`, () => {
  it(`should render Favorites with no empty favorites offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Favorites
              isAuth
              user={appUsers[0]}
              isEmpty={false}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Favorites with empty favorites offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Favorites
              isAuth
              user={appUsers[0]}
              isEmpty
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

