import React from 'react';
import {array} from 'prop-types';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';
import {getUniqueCities, getOffersByCity} from '../../utils';

const FavoritesList = ({favorites}) => {
  const favoritesLocations = getUniqueCities(favorites);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesLocations.map((location, i) => (
          <FavoritesListItem
            key={location}
            city={location}
            offers={getOffersByCity(favorites, favoritesLocations[i])}
          />
        ))}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favorites: array.isRequired
};

export default FavoritesList;
