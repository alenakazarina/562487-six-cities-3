import React from 'react';
import {string} from 'prop-types';

const PremiumMark = ({prefix}) => (
  <div className={`${prefix}__mark`}>
    <span>Premium</span>
  </div>
);

PremiumMark.propTypes = {
  prefix: string.isRequired
};

export default React.memo(PremiumMark);
