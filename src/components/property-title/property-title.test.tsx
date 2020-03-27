import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PropertyTitle from './property-title';

const CHILDREN = <div>Childrens content</div>;
const TITLE = `Property Title`;

describe(`PropertyTitle`, () => {
  it(`should render PropertyTitle correctly`, () => {
    const tree = renderer.create(
        <PropertyTitle title={TITLE} >
          {CHILDREN}
        </PropertyTitle>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
