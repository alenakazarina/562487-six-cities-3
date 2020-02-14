import React from 'react';
import renderer from 'react-test-renderer';
import User from './user';

const users = [{
  id: `01`,
  name: `James`,
  isPro: true,
  avatarUrl: `avatar`
},
{
  id: `02`,
  name: `Bob`,
  isPro: false,
  avatarUrl: `avatar`
}];

describe(`User`, () => {
  it(`should render User with host user pro`, () => {
    const tree = renderer.create(
        <User prefix={`property__host-`} user={users[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render User with review user`, () => {
    const tree = renderer.create(
        <User prefix={`reviews__`} user={users[1]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
