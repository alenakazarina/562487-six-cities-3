import React from 'react';
import {featuresPropTypes} from '../../types';

const Features = ({features}) => {
  const {type, bedrooms, maxAdults} = features;
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
};

Features.propTypes = {
  features: featuresPropTypes
};

export default Features;
