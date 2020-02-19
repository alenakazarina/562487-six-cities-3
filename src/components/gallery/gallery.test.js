import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from './gallery';

const imageSources = [
  `image1`, `image2`, `image3`
];

describe(`Gallery`, () => {
  it(`should render Gallery correctly`, () => {
    const tree = renderer.create(
        <Gallery images={imageSources} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
