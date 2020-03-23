import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {string, bool, func, oneOf} from 'prop-types';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';
import {AppRoute} from '../../const';

const LocationsListItem = ({nodeType, city, isActive, setActiveCity}) => {
  const activeClass = isActive ? `tabs__item--active` : ``;

  return (
    nodeType === `li` ? (
      <li className="locations__item" key={city}>
        <a className={`locations__item-link tabs__item ${activeClass}`}
          onClick={setActiveCity}
        >
          <span>{city}</span>
        </a>
      </li>
    ) : (
      <div className="locations__item" key={city}>
        <Link to={AppRoute.ROOT} className={`locations__item-link tabs__item ${activeClass}`}
          onClick={setActiveCity}
        >
          <span>{city}</span>
        </Link>
      </div>
    )

  );
};

LocationsListItem.propTypes = {
  nodeType: oneOf([`li`, `div`]),
  city: string.isRequired,
  isActive: bool.isRequired,
  setActiveCity: func.isRequired
};

const mapDispatchToProps = (dispatch, props) => ({
  setActiveCity({currentTarget}) {
    const city = currentTarget.text;
    if (props.isActive) {
      return;
    }
    dispatch(OffersActionCreator.setActiveCity(city));
  }
});

export {LocationsListItem};
export default connect(null, mapDispatchToProps)(LocationsListItem);
