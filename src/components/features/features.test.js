import React from 'react';
import renderer from 'react-test-renderer';
import Features from './features';

const type = `hotel`;
const bedrooms = [2, 1];
const maxAdults = [3, 1];

describe(`Features`, () => {
  it(`should render Features with correct plural nouns`, () => {
    const tree = renderer.create(
        <Features
          type={type}
          bedrooms={bedrooms[0]}
          maxAdults={maxAdults[0]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render Features with correct singular nouns`, () => {
    const tree = renderer.create(
        <Features
          type={type}
          bedrooms={bedrooms[1]}
          maxAdults={maxAdults[1]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
