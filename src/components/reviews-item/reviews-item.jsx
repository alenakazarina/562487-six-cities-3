import React from 'react';
import {reviewPropTypes} from '../../types';
import {MONTHS} from '../../const';
import User from '../user/user';
import Rating from '../rating/rating';

const ReviewsItem = ({review}) => {
  const {id, user, comment, date, rating} = review;
  const dateTime = date.toISOString();
  const reviewDate = `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

  return (
    <li className="reviews__item" key={id}>
      <User prefix={`reviews`} user={user} />
      <div className="reviews__info">
        <Rating prefix={`reviews`} rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{reviewDate}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewPropTypes
};

export default ReviewsItem;
