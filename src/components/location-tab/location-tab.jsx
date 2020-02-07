import React from 'react';
import PropTypes from 'prop-types';

const LocationTab = ({location}) => {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{location}</span>
      </a>
    </li>
  );
};

LocationTab.propTypes = {
  location: PropTypes.string.isRequired
};

export default LocationTab;
