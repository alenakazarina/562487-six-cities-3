import React from 'react';
import Sorting from '../sorting/sorting';
import PlacesList from '../places-list/places-list';
import {arrayOf, func} from 'prop-types';
import {offerPropTypes} from '../../types';

const Places = ({offers, onTitleClick}) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offers.length} places to stay in {offers[0].city.name}</b>
    <Sorting />
    <PlacesList
      prefix={`cities`}
      offers={offers}
      onTitleClick={onTitleClick}
    />
  </section>
);

Places.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired
};

export default Places;
