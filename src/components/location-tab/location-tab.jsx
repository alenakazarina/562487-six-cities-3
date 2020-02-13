import React from 'react';
import PropTypes from 'prop-types';

const ACTIVE_CLASS = `tabs__item--active`;

const LocationTab = ({location, isActive}) => {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? ACTIVE_CLASS : ``}`} href="#">
        <span>{location}</span>
      </a>
    </li>
  );
};

LocationTab.propTypes = {
  location: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default LocationTab;
