import {extend} from '../../utils.js';
import Offer from '../../models/offer/offer';
import Comment from '../../models/comment/comment';
import {batch} from 'react-redux';

const ActionType = {
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  UPDATE_COMMENTS: `UPDATE_COMMENTS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  RESET_ACTIVE_OFFER: `RESET_ACTIVE_OFFER`
};

const ActionCreator = {
  loadNearOffers: (offers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offers
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  updateComments: (comments) => ({
    type: ActionType.UPDATE_COMMENTS,
    payload: comments
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer
  }),
  resetActiveOffer: () => ({
    type: ActionType.RESET_ACTIVE_OFFER,
    payload: null
  })
};

const Operation = {
  loadOfferPage: (offer) => (dispatch, getState, api) => {
    return Promise.all([
      api.getNearByHotels(offer.id),
      api.getComments(offer.id)
    ]).then((response) => {
      const offers = Offer.parseOffers(response[0].data);
      const comments = Comment.parseComments(response[1].data);
      batch(() => {
        dispatch(ActionCreator.setActiveOffer(offer));
        dispatch(ActionCreator.loadNearOffers(offers));
        dispatch(ActionCreator.loadComments(comments));
      });
    })
    .catch(() => {});
  },
  loadNearOffers: (id) => (dispatch, getState, api) => {
    return api.getNearByHotels(id)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadNearOffers(offers));
      })
      .catch(() => {});
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.getComments(id)
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.loadComments(comments));
      })
      .catch(() => {});
  },

  updateComments: (id, comment) => (dispatch, getState, api) => {
    return api.updateComments({id, comment})
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.updateComments(comments));
      })
      .catch(() => {});
  }
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {nearOffers: action.payload});
    case ActionType.LOAD_COMMENTS:
      return extend(state, {comments: action.payload});
    case ActionType.UPDATE_COMMENTS:
      return extend(state, {comments: action.payload});
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {activeOffer: action.payload});
    case ActionType.RESET_ACTIVE_OFFER:
      return extend(state, {activeOffer: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
