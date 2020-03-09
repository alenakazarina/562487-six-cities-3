import React from 'react';
import {Link} from 'react-router-dom';
import {string, bool, func} from 'prop-types';
import {AppRoute} from '../../const';

const LocationsListItem = ({nodeType, city, isActive, onTabClick}) => {
  const activeClass = isActive ? `tabs__item--active` : ``;
  return (
    nodeType === `li` ? (
      <li className="locations__item" key={city}>
        <a className={`locations__item-link tabs__item ${activeClass}`}
          onClick={() => {
            if (activeClass) {
              return;
            }
            onTabClick(city);
          }}
        >
          <span>{city}</span>
        </a>
      </li>
    ) : (
      <div className="locations__item" key={city}>
        <Link to={AppRoute.ROOT} className={`locations__item-link tabs__item ${activeClass}`}
          onClick={() => {
            if (activeClass) {
              return;
            }
            onTabClick(city);
          }}
        >
          <span>{city}</span>
        </Link>
      </div>
    )

  );
};

LocationsListItem.propTypes = {
  nodeType: string.isRequired,
  city: string.isRequired,
  isActive: bool.isRequired,
  onTabClick: func.isRequired
};

export default React.memo(LocationsListItem);
