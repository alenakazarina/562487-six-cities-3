import React from 'react';
import renderer from 'react-test-renderer';
import RatingInput from './rating-input';

const mockFn = () => {};
const ratings = [
  {
    value: 5,
    title: `perfect`
  },
  {
    value: 4,
    title: `good`
  }
];

describe(`RatingInput`, () => {
  it(`should render RatingInput not checked`, () => {
    const tree = renderer.create(
        <RatingInput
          rating={ratings[0]}
          isChecked={false}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render RatingInput checked`, () => {
    const tree = renderer.create(
        <RatingInput
          rating={ratings[1]}
          isChecked
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
