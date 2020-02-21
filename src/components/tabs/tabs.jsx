import React from 'react';
import PropTypes from 'prop-types';
import {LOCATIONS} from '../../mocks/const';

const Tabs = ({activeTab}) => {
  const locations = LOCATIONS.map((location) => location.name);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((location) => (
            <li className="locations__item" key={location}>
              <a href="#"
                className={`locations__item-link tabs__item ${location === activeTab && `tabs__item--active`}`} >
                <span>{location}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired
};

export default Tabs;
