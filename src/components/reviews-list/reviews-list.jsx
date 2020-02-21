import React from 'react';
import {arrayOf} from 'prop-types';
import {reviewPropTypes} from '../../types';
import ReviewsItem from '../reviews-item/reviews-item';

const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
  </ul>
);

ReviewsList.propTypes = {
  reviews: arrayOf(reviewPropTypes)
};

export default ReviewsList;
