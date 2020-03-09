import {extend} from '../../utils.js';
import Offer from '../../models/offer';

const initialState = {
  favorites: []
};

const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  UPDATE_FAVORITES: `UPDATE_FAVORITES`
};

const ActionCreator = {
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  }),
  updateFavorites: (offer) => ({
    type: ActionType.UPDATE_FAVORITES,
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

  updateFavorites: (id, isFavorite) => (dispatch, getState, api) => {
    const status = isFavorite ? 1 : 0;
    return api.post(`/favorite/${id}/${status}`, {
      'hotel_id': id,
      'status': status
    })
      .then((response) => {
        const updatedOffer = Offer.parseOffer(response.data);
        dispatch(ActionCreator.updateFavorites(updatedOffer));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return extend(state, {favorites: action.payload});

    case ActionType.UPDATE_FAVORITES:
      const {id, isFavorite} = action.payload;

      if (isFavorite) {
        return extend(state, {favorites: [...state.favorites, action.payload]});
      }

      return extend(state, {favorites: state.favorites.filter((offer) => offer.id !== id)});

    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
