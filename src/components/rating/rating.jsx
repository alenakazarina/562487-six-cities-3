import React from 'react';
import PropTypes from 'prop-types';

const ratingToWidth = new Array(6).fill(``).map((it, i) => `${i * 20}%`);

const Rating = ({children, prefix, rating}) => {
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{width: `${ratingToWidth[Math.round(rating)]}`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
};

Rating.propTypes = {
  prefix: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default Rating;
