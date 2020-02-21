import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';
import {reviews} from '../../mocks/tests';

describe(`ReviewsItem`, () => {
  it(`should render ReviewsItem correctly`, () => {
    const tree = renderer.create(
        <ReviewsItem review={reviews[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
