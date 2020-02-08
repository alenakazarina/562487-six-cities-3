import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import LocationTab from '../location-tab/location-tab.jsx';
import Sorting from '../sorting/sorting.jsx';
import PlaceCard from '../place-card/place-card.jsx';

const Main = ({locations, offers, onTitleClick}) => {
  const activeLocation = locations.find((location) => location.isActive).title;
  const offersCount = offers.length;

  return offersCount ? (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {locations.map((location) => (
                <LocationTab key={location.title} location={location} />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {activeLocation}</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <PlaceCard key={offer.id} title={offer.title} onTitleClick={onTitleClick} />
                ))}
              </div>
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
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {locations.map((location) => (
                <LocationTab key={location.title} location={location} />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property availbale at the moment in {activeLocation}</p>
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
  locations: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  })).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default Main;