import React from 'react';
import {arrayOf, string, func} from 'prop-types';
import LocationsList from '../locations-list/locations-list';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import {offerPropTypes} from '../../types';
import Map from '../map/map';

const Main = ({offers, cities, activeCity, onTitleClick, onTabClick}) => (
  <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
    <h1 className="visually-hidden">Cities</h1>
    <LocationsList
      cities={cities}
      activeCity={activeCity}
      onTabClick={onTabClick}
    />
    <div className="cities">
      <div className={`cities__places-container container ${offers.length === 0 ? `cities__places-container--empty` : ``}`}>
        {offers.length ?
          <>
            <Places
              offers={offers}
              onTitleClick={onTitleClick}
            />
            <div className="cities__right-section">
              <Map
                prefix={`cities`}
                offers={offers}
              />
            </div>
          </>
          : <NoPlaces city={activeCity} />
        }
      </div>
    </div>
  </main>
);

Main.propTypes = {
  cities: arrayOf(string).isRequired,
  activeCity: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onTabClick: func.isRequired
};

export default Main;
