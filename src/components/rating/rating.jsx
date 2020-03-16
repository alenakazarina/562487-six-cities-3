import React from 'react';
import {string, number, bool} from 'prop-types';

const RATING_TO_WIDTH = Array.from({length: 6}, (it, i) => `${i * 20}%`);

const Rating = ({prefix, rating, isValue}) => {
  const ratingValue = Math.round(rating);
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{width: `${RATING_TO_WIDTH[ratingValue]}`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isValue && <span className={`${prefix}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
};

Rating.propTypes = {
  prefix: string.isRequired,
  rating: number.isRequired,
  isValue: bool.isRequired
};

export default React.memo(Rating);
