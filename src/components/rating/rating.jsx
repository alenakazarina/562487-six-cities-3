import React from 'react';
import {string, number, bool} from 'prop-types';

const ratingToWidth = new Array(6).fill(``).map((it, i) => `${i * 20}%`);

const Rating = ({prefix, rating, isValue}) => {
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{width: `${ratingToWidth[Math.round(rating)]}`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isValue && <span className={`${prefix}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
};

Rating.propTypes = {
  prefix: string.isRequired,
  rating: number.isRequired,
  isValue: bool
};

export default React.memo(Rating);
