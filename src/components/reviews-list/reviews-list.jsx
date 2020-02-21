import React from 'react';
import {MONTHS} from '../../mocks/const';
import User from '../user/user';
import Rating from '../rating/rating';
import {arrayOf} from 'prop-types';
import {reviewPropTypes} from '../../types';

const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) => {
      const {id, user, comment, date, rating} = review;
      return (
        <li className="reviews__item" key={id}>
          <User prefix={`reviews`} user={user} />
          <div className="reviews__info">
            <Rating prefix={`reviews`} rating={rating} />
            <p className="reviews__text">{comment}</p>
            <time className="reviews__time" dateTime={date.toISOString().slice(0, 10)}>
              {`${MONTHS[date.getMonth()]} ${date.getFullYear()}`}
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
