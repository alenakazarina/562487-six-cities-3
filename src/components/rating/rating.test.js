import React from 'react';
import renderer from 'react-test-renderer';
import Rating from './rating';

const ratings = [3, 5];

describe(`Rating`, () => {
  it(`should render review Rating with 3 stars`, () => {
    const tree = renderer.create(
        <Rating
          prefix={`reviews`}
          rating={ratings[0]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render place card's Rating with 5 stars`, () => {
    const tree = renderer.create(
        <Rating
          prefix={`place-card`}
          rating={ratings[1]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
