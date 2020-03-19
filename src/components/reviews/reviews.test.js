import React from 'react';
import renderer from 'react-test-renderer';
import {cityOffers, reviews} from '../../mocks/const';
import Reviews from './reviews';

const mockFn = () => {};

describe(`Reviews`, () => {
  it(`should render Reviews with Form`, () => {
    const tree = renderer.create(
        <Reviews
          isAuth
          errorStatus={0}
          activeOffer={cityOffers[0]}
          reviews={reviews}
          reviewsCount={reviews.length}
          onReviewSubmit={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Reviews without Form`, () => {
    const tree = renderer.create(
        <Reviews
          isAuth={false}
          errorStatus={0}
          activeOffer={cityOffers[0]}
          reviews={reviews}
          reviewsCount={reviews.length}
          onReviewSubmit={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Reviews with empty reviews`, () => {
    const tree = renderer.create(
        <Reviews
          isAuth={true}
          errorStatus={0}
          activeOffer={cityOffers[0]}
          reviews={[]}
          reviewsCount={0}
          onReviewSubmit={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
