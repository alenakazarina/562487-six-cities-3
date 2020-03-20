import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {DEFAULT_USER, APP_USERS} from '../../mocks/const';
import Header from './header';

describe(`Header`, () => {
  it(`should render Header with Auth correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header
            isAuth
            user={APP_USERS[0]}
          />
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Header with no Auth correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header
            isAuth={false}
            user={DEFAULT_USER}
          />
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
