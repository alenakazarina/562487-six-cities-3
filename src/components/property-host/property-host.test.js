import React from 'react';
import renderer from 'react-test-renderer';
import PropertyHost from './property-host';
import {USERS} from '../../mocks/const';

const CHILDREN = <div>Childrens content</div>;

describe(`PropertyHost`, () => {
  it(`should render PropertyHost correctly`, () => {
    const tree = renderer.create(
        <PropertyHost host={USERS[0]}>
          {CHILDREN}
        </PropertyHost>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
