import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {defaultUser, appUsers} from '../../mocks/const';
import Header from './header';

describe(`Header`, () => {
  it(`should render Header with Auth correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header
            isAuth
            user={appUsers[0]}
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
            user={defaultUser}
          />
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
