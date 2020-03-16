import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {storeWithNoAuth} from '../../mocks/tests';
import {defaultUser} from '../../mocks/const';
import {Login} from './login';

const city = `Paris`;
const mockFn = () => {};

describe(`Login`, () => {
  it(`should render Login Page correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoAuth}>
          <BrowserRouter>
            <Login
              isAuth={false}
              user={defaultUser}
              activeCity={city}
              errorStatus={0}
              login={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
