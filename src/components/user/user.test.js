import React from 'react';
import renderer from 'react-test-renderer';
import User from './user';
import {users} from '../../mocks/const';

const prefixes = [`property__host-`, `reviews__`];

describe(`User`, () => {
  it(`should render User with host user pro`, () => {
    const tree = renderer.create(
        <User prefix={prefixes[0]} user={users[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render User with review user`, () => {
    const tree = renderer.create(
        <User prefix={prefixes[1]} user={users[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
