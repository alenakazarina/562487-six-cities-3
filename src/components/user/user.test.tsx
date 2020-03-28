import * as React from 'react';
import * as renderer from 'react-test-renderer';
import User from './user';
import {USERS} from '../../mocks/const';

describe(`User`, () => {
  it(`should render User with host user pro`, () => {
    const tree = renderer.create(
        <User prefix="property" user={USERS[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render User with review user`, () => {
    const tree = renderer.create(
        <User prefix="reviews" user={USERS[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
