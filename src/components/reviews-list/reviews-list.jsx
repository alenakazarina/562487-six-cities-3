import React from 'react';
import {MONTHS} from '../../mocks/const';
import User from '../user/user';
import Rating from '../rating/rating';
import {arrayOf} from 'prop-types';
import {reviewPropTypes} from '../../types';

const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) => {
      return (
        <li className="reviews__item" key={review.id}>
          <User prefix={`reviews__`} user={review.user} />
          <div className="reviews__info">
            <Rating
              prefix={`reviews`}
              rating={review.rating}
            />
            <p className="reviews__text">{review.comment}</p>
            <time className="reviews__time" dateTime={review.date.toISOString().slice(0, 10)}>
              {`${MONTHS[review.date.getMonth()]} ${review.date.getFullYear()}`}
            </time>
          </div>
        </li>
      );
    })}
  </ul>
);

ReviewsList.propTypes = {
  reviews: arrayOf(reviewPropTypes)
};

export default ReviewsList;
