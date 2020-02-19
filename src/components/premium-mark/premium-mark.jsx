import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({prefix}) => (
  <div className={`${prefix}__mark`}>
    <span>Premium</span>
  </div>
);

PremiumMark.propTypes = {
  prefix: PropTypes.string.isRequired
};

export default PremiumMark;
