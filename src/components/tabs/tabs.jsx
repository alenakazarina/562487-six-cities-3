import React from 'react';
import PropTypes from 'prop-types';
import {LOCATIONS} from '../../mocks/const';
import LocationTab from '../location-tab/location-tab';

const Tabs = ({activeTab}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((location) => (
            <LocationTab
              key={location}
              location={location}
              isActive={location === activeTab}
            />
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
