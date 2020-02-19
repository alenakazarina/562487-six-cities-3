import React from 'react';
import renderer from 'react-test-renderer';
import PropertyTitle from './property-title';

const childrensContent = <div>Childrens content</div>;
const title = `Property Title`;

describe(`PropertyTitle`, () => {
  it(`should render PropertyTitle correctly`, () => {
    const tree = renderer.create(
        <PropertyTitle title={title} >
          {childrensContent}
        </PropertyTitle>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
