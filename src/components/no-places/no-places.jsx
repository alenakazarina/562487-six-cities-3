import React from 'react';
import {cityPropTypes} from '../../types';

const NoPlaces = ({city}) => (
  <section className="cities__no-places">
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property availbale at the moment in {city.name}</p>
    </div>
  </section>
);

NoPlaces.propTypes = {
  city: cityPropTypes
};

export default NoPlaces;
