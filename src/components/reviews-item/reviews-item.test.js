import React from 'react';
import renderer from 'react-test-renderer';
import {REVIEWS} from '../../mocks/const';
import ReviewsItem from './reviews-item';

describe(`ReviewsItem`, () => {
  it(`should render ReviewsItem correctly`, () => {
    const tree = renderer.create(
        <ReviewsItem review={REVIEWS[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
