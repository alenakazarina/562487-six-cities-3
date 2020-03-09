import React from 'react';
import {string, arrayOf, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import PlaceCard from '../place-card/place-card';
import LocationsListItem from '../locations-list-item/locations-list-item';

const FavoritesListItem = (props) => {
  const {
    city,
    offers,
    onTitleClick,
    onFavoriteClick,
    onTabClick
  } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <LocationsListItem
          nodeType="div"
          city={city}
          isActive={false}
          onTabClick={() => onTabClick(city)}
        />
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            prefix={`favorites`}
            offer={offer}
            onTitleClick={onTitleClick}
            onMouseEnter={()=>{}}
            onMouseLeave={()=>{}}
            onFavoriteClick={onFavoriteClick}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesListItem.propTypes = {
  city: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onFavoriteClick: func.isRequired,
  onTabClick: func.isRequired
};

export default React.memo(FavoritesListItem);
