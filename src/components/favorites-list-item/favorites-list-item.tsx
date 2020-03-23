import React from 'react';
import {string, arrayOf, bool} from 'prop-types';
import {offerPropTypes} from '../../types';
import PlaceCard from '../place-card/place-card';
import LocationsListItem from '../locations-list-item/locations-list-item';

const FavoritesListItem = (props) => {
  const {
    city,
    offers,
    isActive
  } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <LocationsListItem
          nodeType="div"
          city={city}
          isActive={isActive}
        />
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            prefix={`favorites`}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesListItem.propTypes = {
  isActive: bool.isRequired,
  city: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired
};

export default React.memo(FavoritesListItem);
