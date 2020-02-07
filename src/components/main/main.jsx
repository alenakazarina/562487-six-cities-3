import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';

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

const LocationTabs = ({locations}) => {
  const locationsItems = locations.map((location) => (
    <LocationTab key={location} location={location} />
  ));
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locationsItems}
        </ul>
      </section>
    </div>
  );
};

LocationTabs.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Sorting = () => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {/* <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex="0">Popular</li>
        <li className="places__option" tabIndex="0">Price: low to high</li>
        <li className="places__option" tabIndex="0">Price: high to low</li>
        <li className="places__option" tabIndex="0">Top rated first</li>
      </ul> */}
    </form>
  );
};

const PlaceCard = ({title}) => {
  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  title: PropTypes.string.isRequired
};

const PlaceCards = ({offers}) => {
  const cards = offers.map((offer) => (
    <PlaceCard key={offer.id} title={offer.title} />
  ));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
};

PlaceCards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

const Main = ({locations, offers}) => {
  const offersCount = offers.length;
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationTabs locations={locations} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <Sorting />
              <PlaceCards offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Main;
