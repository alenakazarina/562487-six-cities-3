import {extend} from '../../utils.js';
import Offer from '../../models/offer/offer';

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),

  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.getHotels()
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCreator.setActiveCity(offers[0].city.name));
      })
      .catch(() => {});
  }
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {activeCity: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
