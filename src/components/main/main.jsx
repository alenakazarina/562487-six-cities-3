import React from 'react';
import {arrayOf, func} from 'prop-types';
import Tabs from '../tabs/tabs';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import Map from '../map/map';
import {offerPropTypes, cityPropTypes} from '../../types';

const Main = ({city, offers, onTitleClick}) => {
  const offersCount = offers.length;

  return (
    <main className={`page__main page__main--index ${offersCount === 0 && `page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeTab={city.name} />
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          {offersCount ?
            <Places
              city={city}
              offers={offers}
              onTitleClick={onTitleClick}
            />
            : <NoPlaces city={city} />
          }
          <div className="cities__right-section">
            {offersCount && <Map city={city} prefix={`cities`} />}
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  city: cityPropTypes,
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired
};

export default Main;
