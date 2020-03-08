import {extend} from '../../utils.js';
import Offer from '../../models/offer';

const initialState = {
  offers: [],
  activeCity: ``
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),

  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city
  }),

  updateOffers: () => ({
    type: ActionType.UPDATE_OFFERS
  }),

  toggleFavorite: (id) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: id
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCreator.setActiveCity(offers[0].city.name));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.UPDATE_OFFERS:
      return extend(state, {offers: state.offers});
    case ActionType.TOGGLE_FAVORITE:
      const updatedOffer = state.offers.find((offer) => offer.id === action.payload);
      return extend(state, {
        offers: state.offers.map((offer) => {
          if (offer.id === updatedOffer.id) {
            offer.isFavorite = !updatedOffer.isFavorite;
          }
          return offer;
        })});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
