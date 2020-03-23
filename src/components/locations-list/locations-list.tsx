import React from 'react';
import {arrayOf, string} from 'prop-types';
import LocationsListItem from '../locations-list-item/locations-list-item';

const LocationsList = (props) => {
  const {
    cities,
    activeCity
  } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <LocationsListItem
              key={city}
              nodeType="li"
              city={city}
              isActive={city === activeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

LocationsList.propTypes = {
  cities: arrayOf(string).isRequired,
  activeCity: string.isRequired
};

export default React.memo(LocationsList);
