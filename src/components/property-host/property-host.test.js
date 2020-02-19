import React from 'react';
import renderer from 'react-test-renderer';
import PropertyHost from './property-host';
import {users} from '../../mocks/tests';

const childrensContent = <div>Childrens content</div>;

describe(`PropertyHost`, () => {
  it(`should render PropertyHost correctly`, () => {
    const tree = renderer.create(
        <PropertyHost host={users[0]}>
          {childrensContent}
        </PropertyHost>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
