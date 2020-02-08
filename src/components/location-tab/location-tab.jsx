import React from 'react';
import PropTypes from 'prop-types';

const ACTIVE_CLASS = `tabs__item--active`;

const LocationTab = ({location}) => {
  const {title, isActive} = location;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? ACTIVE_CLASS : ``}`} href="#">
        <span>{title}</span>
      </a>
    </li>
  );
};

LocationTab.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  })
};

export default LocationTab;
