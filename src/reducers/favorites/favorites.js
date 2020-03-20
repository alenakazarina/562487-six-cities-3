import {extend} from '../../utils.js';
import Offer from '../../models/offer/offer';

const initialState = {
  favorites: []
};

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
    return api.get(`/favorite`)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadFavorites(offers));
      });
  },

  addFavorite: (id) => (dispatch, getState, api) => {
    const status = 1;
    return api.post(`/favorite/${id}/${status}`, {
      'hotel_id': id,
      'status': status
    })
      .then((response) => {
        const offer = Offer.parseOffer(response.data);
        dispatch(ActionCreator.addFavorite(offer));
      });
  },

  removeFavorite: (id) => (dispatch, getState, api) => {
    const status = 0;
    return api.post(`/favorite/${id}/${status}`, {
      'hotel_id': id,
      'status': status
    })
      .then((response) => {
        const offer = Offer.parseOffer(response.data);
        dispatch(ActionCreator.removeFavorite(offer));
      });
  }
};

const reducer = (state = initialState, action) => {
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
