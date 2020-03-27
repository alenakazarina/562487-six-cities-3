import * as React from 'react';
import {Review} from '../../types';
import {formatDatetime, formatMonthYear} from '../../utils';
import User from '../user/user';
import Rating from '../rating/rating';

type Props = {
  review: Review
};

const ReviewsItem: React.FC<Props> = ({review}) => {
  const {id, user, text, date, rating} = review;
  const dateTime = formatDatetime(date);
  const reviewDate = formatMonthYear(date);

  return (
    <li className="reviews__item" key={id}>
      <User prefix={`reviews`} user={user} />
      <div className="reviews__info">
        <Rating
          prefix={`reviews`}
          rating={rating}
          isValue={false}
        />
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={dateTime}>{reviewDate}</time>
      </div>
    </li>
  );
};

export default ReviewsItem;
