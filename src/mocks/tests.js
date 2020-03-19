import configureStore from 'redux-mock-store';
import {AuthStatus} from '../reducers/user/user';
import {cityOffers, reviews, appUsers} from './const';

const defaultUser = {
  id: -1,
  email: ``,
  name: ``,
  isPro: false,
  avatarUrl: ``
};

const mockStore = configureStore([]);

export const storeWithAuth = mockStore({
  USER: {
    authStatus: AuthStatus.AUTH,
    user: appUsers[0]
  },
  OFFERS: {
    offers: cityOffers,
    activeCity: `Paris`
  },
  OFFER: {
    activeOffer: cityOffers[1],
    nearOffers: cityOffers.slice(0, 2),
    comments: reviews
  },
  FAVORITES: {
    favorites: cityOffers.filter((offer) => offer.isFavorite)
  },
  ERRORS: {
    errorStatus: 0
  }
});

export const storeWithNoAuth = mockStore({
  USER: {
    authStatus: AuthStatus.NO_AUTH,
    user: defaultUser
  },
  OFFERS: {
    offers: cityOffers,
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

export const storeWithNoOffers = mockStore({
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
