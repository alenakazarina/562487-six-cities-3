import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth, storeWithNoOffers} from '../../mocks/tests';
import {appUsers, defaultUser} from '../../mocks/const';
import Main from './main';

describe(`Main`, () => {
  it(`should render Main correctly with no empty offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Main
              isAuth
              user={appUsers[0]}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with empty offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoOffers}>
          <BrowserRouter>
            <Main
              isAuth={false}
              user={defaultUser}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

