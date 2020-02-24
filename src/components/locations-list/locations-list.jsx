import React from 'react';
import {arrayOf, string, func} from 'prop-types';

const LocationsList = ({cities, activeCity, onTabClick}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`}
                onClick={() => onTabClick(city)}
              >
                <span>{city}</span>
              </a>
            </li>
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

export default LocationsList;
