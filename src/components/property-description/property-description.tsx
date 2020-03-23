import React from 'react';
import {string} from 'prop-types';

const PropertyDescription = ({description}) => (
  <div className="property__description">
    <p className="property__text">{description}</p>
  </div>
);

PropertyDescription.propTypes = {
  description: string.isRequired
};

export default React.memo(PropertyDescription);
