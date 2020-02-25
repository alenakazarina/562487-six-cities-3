import React from 'react';
import PlacesList from '../places-list/places-list';
import {arrayOf, func} from 'prop-types';
import {offerPropTypes} from '../../types';

const NearPlaces = ({offers, onTitleClick, onCardMouseOver}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlacesList
        prefix={`near-places`}
        offers={offers}
        onTitleClick={onTitleClick}
        onCardMouseOver={onCardMouseOver}
      />
    </section>
  );
};

NearPlaces.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onCardMouseOver: func.isRequired
};

export default React.memo(NearPlaces);
