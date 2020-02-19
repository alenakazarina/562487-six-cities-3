import React from 'react';
import {arrayOf, string} from 'prop-types';

const PropertyInside = ({amenities}) => (
  <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {amenities.map((amenity, index) => (
        <li key={index} className="property__inside-item">{amenity}</li>
      ))}
    </ul>
  </div>
);

PropertyInside.propTypes = {
  amenities: arrayOf(string).isRequired,
};

export default PropertyInside;
