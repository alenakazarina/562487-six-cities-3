import React from 'react';
import {arrayOf, string, func} from 'prop-types';
import LocationsList from '../locations-list/locations-list';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import {offerPropTypes} from '../../types';
import Map from '../map/map';
import withSort from '../../hocs/with-sort/with-sort';

const PlacesWithSort = withSort(Places);

const Main = (props) => {
  const {
    offers,
    cities,
    activeCity,
    onTitleClick,
    onTabClick,
    onCardMouseOver,
    activeOffer
  } = props;
  return (
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
              <PlacesWithSort
                offers={offers}
                onTitleClick={onTitleClick}
                onCardMouseOver={onCardMouseOver}
              />
              <div className="cities__right-section">
                <Map
                  prefix={`cities`}
                  offers={offers}
                  activeOffer={activeOffer}
                />
              </div>
            </>
            : <NoPlaces city={activeCity} />
          }
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  cities: arrayOf(string).isRequired,
  activeCity: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onTabClick: func.isRequired,
  onCardMouseOver: func.isRequired,
  activeOffer: offerPropTypes
};

export default React.memo(Main);
