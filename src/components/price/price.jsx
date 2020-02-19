import React from 'react';
import PropTypes from 'prop-types';

const Price = ({prefix, price}) => {
  const priceText = prefix === `property` ? ` night` : `/ night`;
  return (
    <div className={`${prefix}__price`}>
      <b className={`${prefix}__price-value`}>&euro;{price}</b>
      <span className={`${prefix}__price-text`}
        style={{marginLeft: `3px`}}
      >{priceText}</span>
    </div>
  );
};

Price.propTypes = {
  prefix: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Price;
