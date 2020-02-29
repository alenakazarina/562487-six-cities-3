import React from 'react';
import renderer from 'react-test-renderer';
import Login from './login';

describe(`Login`, () => {
  it(`should render Login Page correctly`, () => {
    const tree = renderer.create(
        <Login />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
