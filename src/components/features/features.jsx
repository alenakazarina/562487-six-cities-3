import React from 'react';
import {featuresPropTypes} from '../../types';
import {formatPluralNouns} from '../../utils';

const Features = ({features}) => {
  const {type, bedrooms, maxAdults} = features;
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {formatPluralNouns(bedrooms, `Bedroom`)}
      </li>
      <li className="property__feature property__feature--adults">
        Max {formatPluralNouns(maxAdults, `adult`)}
      </li>
    </ul>
  );
};

Features.propTypes = {
  features: featuresPropTypes
};

export default Features;
