import {extend, getOffersByCity} from '../utils';

const initialState = {
  initialOffers: [],
  offers: [],
  cities: [],
  activeOffer: null,
  activeCity: ``
};

export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  GET_OFFERS: `GET_OFFERS`
};

export const ActionCreator = {
  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city
  }),

  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer
  }),

  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {activeOffer: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: getOffersByCity(state.initialOffers, action.payload)});
  }
  return state;
};
