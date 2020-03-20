import React from 'react';
import renderer from 'react-test-renderer';
import User from './user';
import {USERS} from '../../mocks/const';

const PREFIXES = [`property__host-`, `reviews__`];

describe(`User`, () => {
  it(`should render User with host user pro`, () => {
    const tree = renderer.create(
        <User prefix={PREFIXES[0]} user={USERS[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render User with review user`, () => {
    const tree = renderer.create(
        <User prefix={PREFIXES[1]} user={USERS[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
