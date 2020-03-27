import * as React from 'react';
import {connect} from 'react-redux';
import {OfferTypes} from '../../types';
import {getActiveCity} from '../../reducers/offers/selectors';
import {getFavorites, getFavoritesLocations} from '../../reducers/favorites/selectors';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';
import {getOffersByCity} from '../../utils';

interface Props {
  favorites: OfferTypes[];
  favoritesLocations: string[];
  activeCity: string;
}

const FavoritesList: React.FC<Props> = (props: Props) => {
  const {
    favorites,
    favoritesLocations,
    activeCity
  } = props;
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesLocations.map((location, i) => (
          <FavoritesListItem
            key={location}
            city={location}
            offers={getOffersByCity(favorites, favoritesLocations[i])}
            isActive={activeCity === location}
          />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  favoritesLocations: getFavoritesLocations(state),
  activeCity: getActiveCity(state)
});

export {FavoritesList};
export default connect(mapStateToProps)(FavoritesList);
