import Namespace from '../namespace';

const NAMESPACE = Namespace.FAVORITES;

export const getFavorites = (state) => state[NAMESPACE].favorites;
