import {createSelector} from 'reselect';
import Namespace from '../namespace';
import {getUniqueCities} from '../../utils';

const NAMESPACE = Namespace.OFFERS;

export const getOffers = (state) => state[NAMESPACE].offers;

export const getActiveCity = (state) => state[NAMESPACE].activeCity;

export const getCities = createSelector(
    getOffers,
    (offers) => getUniqueCities(offers)
);

export const getOffersByCity = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => offers.filter((offer) => offer.city.name === activeCity)
);

