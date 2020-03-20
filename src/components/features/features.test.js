import React from 'react';
import renderer from 'react-test-renderer';
import Features from './features';

const TYPE = `hotel`;
const BEDROOMS = [2, 1];
const MAX_ADULTS = [3, 1];

describe(`Features`, () => {
  it(`should render Features with correct plural nouns`, () => {
    const tree = renderer.create(
        <Features
          type={TYPE}
          bedrooms={BEDROOMS[0]}
          maxAdults={MAX_ADULTS[0]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render Features with correct singular nouns`, () => {
    const tree = renderer.create(
        <Features
          type={TYPE}
          bedrooms={BEDROOMS[1]}
          maxAdults={MAX_ADULTS[1]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
