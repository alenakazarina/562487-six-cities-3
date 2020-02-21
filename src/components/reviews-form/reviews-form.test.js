import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form';

describe(`ReviewForm`, () => {
  it(`should render ReviewForm correctly`, () => {
    const tree = renderer.create(
        <ReviewsForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
