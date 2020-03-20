import configureStore from 'redux-mock-store';
import {AuthStatus} from '../reducers/user/user';
import {CITY_OFFERS, REVIEWS, APP_USERS} from './const';

const defaultUser = {
  id: -1,
  email: ``,
  name: ``,
  isPro: false,
  avatarUrl: ``
};

const mockStore = configureStore([]);

export const STORE_WITH_AUTH = mockStore({
  USER: {
    authStatus: AuthStatus.AUTH,
    user: APP_USERS[0]
  },
  OFFERS: {
    offers: CITY_OFFERS,
    activeCity: `Paris`
  },
  OFFER: {
    activeOffer: CITY_OFFERS[1],
    nearOffers: CITY_OFFERS.slice(0, 2),
    comments: REVIEWS
  },
  FAVORITES: {
    favorites: CITY_OFFERS.filter((offer) => offer.isFavorite)
  },
  ERRORS: {
    errorStatus: 0
  }
});

export const STORE_WITH_NO_AUTH = mockStore({
  USER: {
    authStatus: AuthStatus.NO_AUTH,
    user: defaultUser
  },
  OFFERS: {
    offers: CITY_OFFERS,
    activeCity: `Paris`
  },
  OFFER: {
    activeOffer: null,
    nearOffers: [],
    comments: []
  },
  FAVORITES: {
    favorites: []
  },
  ERRORS: {
    errorStatus: 0
  }
});

export const STORE_WITH_NO_OFFERS = mockStore({
  USER: {
    authStatus: AuthStatus.NO_AUTH,
    user: defaultUser
  },
  OFFERS: {
    offers: [],
    activeCity: `Paris`
  },
  OFFER: {
    activeOffer: null,
    nearOffers: [],
    comments: []
  },
  FAVORITES: {
    favorites: []
  },
  ERRORS: {
    errorStatus: 0
  }
});
