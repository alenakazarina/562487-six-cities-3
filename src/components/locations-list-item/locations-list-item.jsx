import React from 'react';
import {string, bool, func} from 'prop-types';

const LocationsListItem = ({city, isActive, onTabClick}) => {
  const activeClass = isActive ? `tabs__item--active` : ``;
  return (
    <li className="locations__item" key={city}>
      <a
        className={`locations__item-link tabs__item ${activeClass}`}
        onClick={() => onTabClick(city)}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationsListItem.propTypes = {
  city: string.isRequired,
  isActive: bool.isRequired,
  onTabClick: func.isRequired
};

export default React.memo(LocationsListItem);
