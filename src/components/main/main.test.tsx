import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH, STORE_WITH_NO_OFFERS} from '../../mocks/tests';
import {APP_USERS, DEFAULT_USER} from '../../mocks/const';
import Main from './main';

describe(`Main`, () => {
  it(`should render Main correctly with no empty offers`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <Main
              isAuth
              user={APP_USERS[0]}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with empty offers`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_NO_OFFERS}>
          <BrowserRouter>
            <Main
              isAuth={false}
              user={DEFAULT_USER}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

