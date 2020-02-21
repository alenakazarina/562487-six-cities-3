import React from 'react';
import renderer from 'react-test-renderer';
import Rating from './rating';

const ratings = [3, 5];
const prefixes = [`reviews`, `place-card`];

describe(`Rating`, () => {
  it(`should render review Rating with 3 stars`, () => {
    const tree = renderer.create(
        <Rating
          prefix={prefixes[0]}
          rating={ratings[0]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render place card's Rating with 5 stars`, () => {
    const tree = renderer.create(
        <Rating
          prefix={prefixes[1]}
          rating={ratings[1]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
