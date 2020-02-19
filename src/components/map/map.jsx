import React from 'react';
import {string} from 'prop-types';
import {cityPropTypes} from '../../types';

const Map = ({prefix}) => {
  return (
    <section className={`${prefix}__map map`} />
  );
};

Map.propTypes = {
  city: cityPropTypes,
  prefix: string.isRequired
};

export default Map;
