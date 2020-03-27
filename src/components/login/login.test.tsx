import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {STORE_WITH_NO_AUTH} from '../../mocks/tests';
import {DEFAULT_USER} from '../../mocks/const';
import Login from './login';

const CITY = `Amsterdam`;
const mockFn = () => {};

describe(`Login`, () => {
  it(`should render Login Page correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_NO_AUTH}>
          <BrowserRouter>
            <Login
              isAuth={false}
              user={DEFAULT_USER}
              activeCity={CITY}
              errorStatus={0}
              login={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
