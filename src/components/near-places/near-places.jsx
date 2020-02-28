import React from 'react';
import {arrayOf, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import PlacesList from '../places-list/places-list';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const PlacesListWrapped = withActiveItem(PlacesList, `places-list`);

const NearPlaces = (props) => {
  const {
    nearOffers,
    onTitleClick,
    onCardHoverChange
  } = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlacesListWrapped
        prefix={`near-places`}
        offers={nearOffers}
        onTitleClick={onTitleClick}
        onCardHoverChange={onCardHoverChange}
      />
    </section>
  );
};

NearPlaces.propTypes = {
  nearOffers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onCardHoverChange: func.isRequired
};

export default React.memo(NearPlaces);
