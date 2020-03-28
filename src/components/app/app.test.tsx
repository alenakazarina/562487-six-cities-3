import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import App from './app';
import {STORE_WITH_NO_AUTH, STORE_WITH_AUTH} from '../../mocks/tests';
import {CITY_OFFERS, APP_USERS, DEFAULT_USER} from '../../mocks/const';

const mockFn = jest.fn();

describe(`App`, () => {
  it(`should render App with no auth user`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_NO_AUTH}>
          <App
            initialOffers={CITY_OFFERS}
            isAuth={false}
            user={DEFAULT_USER}
            errorStatus={0}
            resetError={mockFn}
          />
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render App with auth user`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <App
            initialOffers={CITY_OFFERS}
            isAuth
            user={APP_USERS[0]}
            errorStatus={0}
            resetError={mockFn}
          />
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
