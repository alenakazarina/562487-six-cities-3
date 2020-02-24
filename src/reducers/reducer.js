import {extend} from '../utils';

const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const getUniqueCities = (offers) => {
  const cities = new Set(offers.map((offer) => offer.city.name));
  return Array.from(cities);
};

const initialState = {
  initialOffers: [],
  offers: [],
  cities: [],
  activeOffer: null,
  activeCity: ``
};

export const ActionType = {
  SET_INITIAL_OFFERS: `SET_INITIAL_OFFERS`,
  SET_CITIES: `SET_CITIES`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  GET_OFFERS: `GET_OFFERS`
};

export const ActionCreator = {
  setInitialOffers: (initialOffers) => ({
    type: ActionType.SET_INITIAL_OFFERS,
    payload: initialOffers
  }),

  setCities: (initialOffers) => ({
    type: ActionType.SET_CITIES,
    payload: getUniqueCities(initialOffers)
  }),

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
    case ActionType.SET_INITIAL_OFFERS:
      return extend(state, {initialOffers: action.payload});
    case ActionType.SET_CITIES:
      return extend(state, {cities: action.payload});
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {activeOffer: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: getOffersByCity(state.initialOffers, action.payload)});
  }
  return state;
};
