import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth, storeWithNoAuth} from '../../mocks/tests';
import Header from './header';

describe(`Header`, () => {
  it(`should render Header with Auth correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Header
              isAuth
              user
              location={{pathname: `/`}}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Header with no Auth correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoAuth}>
          <BrowserRouter>
            <Header
              isAuth
              user
              location={{pathname: `/`}}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
