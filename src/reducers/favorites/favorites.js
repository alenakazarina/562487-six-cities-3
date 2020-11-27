import {extend} from '../../utils.js';
import Offer from '../../models/offer/offer';

const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  ADD_FAVORITE: `ADD_FAVORITE`,
  REMOVE_FAVORITE: `REMOVE_FAVORITE`
};

const ActionCreator = {
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  }),
  addFavorite: (offer) => ({
    type: ActionType.ADD_FAVORITE,
    payload: offer
  }),
  removeFavorite: (offer) => ({
    type: ActionType.REMOVE_FAVORITE,
    payload: offer
  })
};

const Operation = {
  loadFavorites: () => (dispatch, getState, api) => {
    return api.getFavorites()
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadFavorites(offers));
      })
      .catch(() => {});
  },

  addFavorite: (id) => (dispatch, getState, api) => {
    return api.addFavorite(id)
      .then((response) => {
        const offer = Offer.parseOffer(response.data);
        dispatch(ActionCreator.addFavorite(offer));
      })
      .catch(() => {});
  },

  removeFavorite: (id) => (dispatch, getState, api) => {
    return api.removeFavorite(id)
      .then((response) => {
        const offer = Offer.parseOffer(response.data);
        dispatch(ActionCreator.removeFavorite(offer));
      })
      .catch(() => {});
  }
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return extend(state, {favorites: action.payload});
    case ActionType.ADD_FAVORITE:
      return extend(state, {favorites: [action.payload, ...state.favorites]});
    case ActionType.REMOVE_FAVORITE:
      return extend(state, {favorites: state.favorites.filter((offer) => offer.id !== action.payload.id)});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
