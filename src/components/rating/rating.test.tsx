import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Rating from './rating';

const RATINGS = [3, 5];
const PREFIXES = [`reviews`, `place-card`];

describe(`Rating`, () => {
  it(`should render review Rating with value, 3 stars, width = 60%`, () => {
    const tree = renderer.create(
        <Rating
          prefix={PREFIXES[0]}
          rating={RATINGS[0]}
          isValue
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render place card's Rating with 5 stars, width = 100%, without value`, () => {
    const tree = renderer.create(
        <Rating
          prefix={PREFIXES[1]}
          rating={RATINGS[1]}
          isValue={false}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
