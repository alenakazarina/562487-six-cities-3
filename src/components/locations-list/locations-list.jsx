import React from 'react';
import {arrayOf, string, func} from 'prop-types';
import LocationsListItem from '../locations-list-item/locations-list-item';

const LocationsList = ({cities, activeCity, onTabClick}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <LocationsListItem
              key={city}
              city={city}
              isActive={city === activeCity}
              onTabClick={onTabClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

LocationsList.propTypes = {
  cities: arrayOf(string).isRequired,
  activeCity: string.isRequired,
  onTabClick: func.isRequired
};

export default React.memo(LocationsList);
