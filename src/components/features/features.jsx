import React from 'react';
import {string, number} from 'prop-types';
import {formatPluralNouns} from '../../utils';

const Features = ({type, bedrooms, maxAdults}) => {
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
  type: string.isRequired,
  bedrooms: number.isRequired,
  maxAdults: number.isRequired
};

export default React.memo(Features);
