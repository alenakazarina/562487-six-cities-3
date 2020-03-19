import Namespace from '../namespace';
import {createSelector} from 'reselect';

const NAMESPACE = Namespace.FAVORITES;

export const getFavorites = (state) => state[NAMESPACE].favorites;

export const checkFavorite = (state, id) => state[NAMESPACE].favorites.findIndex((offer) => offer.id === id) !== -1;

export const getFavoritesLocations = createSelector(
    getFavorites,
    (favorites) => Array.from(new Set(favorites.map((favorite) => favorite.city.name)))
);
