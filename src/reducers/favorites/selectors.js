import Namespace from '../namespace';
import {createSelector} from 'reselect';

const NAMESPACE = Namespace.FAVORITES;

export const getFavorites = (state) => state[NAMESPACE].favorites;

export const getFavoritesLocations = createSelector(
    getFavorites,
    (favorites) => Array.from(new Set(favorites.map((favorite) => favorite.city.name)))
);
