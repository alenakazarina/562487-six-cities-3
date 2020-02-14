import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Sorting from '../sorting/sorting';
import PlacesList from '../places-list/places-list';
import {offerPropTypes} from '../../types';

const PREFIX = `cities__`;

const Main = ({city, offers, onTitleClick}) => {
  const offersCount = offers.length;

  return offersCount ? (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeTab={city} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {city}</b>
              <Sorting />
              <PlacesList
                prefix={PREFIX}
                offers={offers}
                onTitleClick={onTitleClick}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeTab={city} />
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property availbale at the moment in {city}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default Main;
