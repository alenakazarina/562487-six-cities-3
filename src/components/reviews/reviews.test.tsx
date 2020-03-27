import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {CITY_OFFERS, REVIEWS} from '../../mocks/const';
import Reviews from './reviews';

const mockFn = () => {};

describe(`Reviews`, () => {
  it(`should render Reviews with Form`, () => {
    const tree = renderer.create(
        <Reviews
          isAuth
          errorStatus={0}
          activeOffer={CITY_OFFERS[0]}
          reviews={REVIEWS}
          reviewsCount={REVIEWS.length}
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
          activeOffer={CITY_OFFERS[0]}
          reviews={REVIEWS}
          reviewsCount={REVIEWS.length}
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
          activeOffer={CITY_OFFERS[0]}
          reviews={[]}
          reviewsCount={0}
          onReviewSubmit={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
