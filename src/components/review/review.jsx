import React from 'react';
import Rating from '../rating/rating';
import {reviewPropTypes} from '../../types.js';
import {MONTHS} from '../../mocks/const';
import User from '../user/user';

const Review = ({review}) => {
  const {user, rating, comment, date} = review;
  const reviewDate = `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  const datetime = date.toISOString().slice(0, 10);
  return (
    <li className="reviews__item">
      <User prefix={`reviews__`} user={user} />
      <div className="reviews__info">
        <Rating
          prefix={`reviews__`}
          rating={rating}
        />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={datetime}>
          {reviewDate}
        </time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewPropTypes
};

export default Review;
