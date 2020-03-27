import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form';

const mockFn = () => {};

describe(`ReviewForm`, () => {
  it(`should render ReviewForm with initial state`, () => {
    const tree = renderer.create(
        <ReviewsForm
          rating={0}
          text={``}
          errorStatus={0}
          reviewsCount={1}
          offerId={1}
          isDisabled={false}
          setDisabled={mockFn}
          onChange={mockFn}
          onReviewSubmit={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
