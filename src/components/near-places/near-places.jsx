import React from 'react';
import {arrayOf} from 'prop-types';
import {offerPropTypes} from '../../types';
import PlacesList from '../places-list/places-list';

const NearPlaces = ({nearOffers}) => {
  return nearOffers.length ? (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlacesList
        prefix={`near-places`}
        offers={nearOffers}
      />
    </section>
  ) : ``;
};

NearPlaces.propTypes = {
  nearOffers: arrayOf(offerPropTypes).isRequired
};

export default React.memo(NearPlaces);
