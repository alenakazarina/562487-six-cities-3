import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import App from './app';
import {storeWithNoAuth} from '../../mocks/tests';
import {cityOffers, appUsers, defaultUser} from '../../mocks/const';

const mockFn = () => {};

describe(`App`, () => {
  it(`should render App`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoAuth}>
          <App
            initialOffers={cityOffers}
            isAuth={false}
            user={defaultUser}
            errorStatus={0}
            resetError={mockFn}
          />
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render App`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoAuth}>
          <App
            initialOffers={cityOffers}
            isAuth
            user={appUsers[0]}
            errorStatus={0}
            resetError={mockFn}
          />
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
