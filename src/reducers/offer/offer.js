import {extend} from '../../utils.js';
import Offer from '../../models/offer';
import Comment from '../../models/comment';

const initialState = {
  pageOffer: null,
  activeOffer: null,
  nearOffers: [],
  comments: []
};

const ActionType = {
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  UPDATE_COMMENTS: `UPDATE_COMMENTS`,
  SET_PAGE_OFFER: `SET_PAGE_OFFER`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`
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
  setPageOffer: (offer) => ({
    type: ActionType.SET_PAGE_OFFER,
    payload: offer
  }),

  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer
  })
};

const Operation = {
  loadNearOffers: (pageOffer) => (dispatch, getState, api) => {
    return api.get(`/hotels/${pageOffer.id}/nearby`)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadNearOffers(offers));
      });
  },

  loadComments: (pageOffer) => (dispatch, getState, api) => {
    return api.get(`/comments/${pageOffer.id}`)
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.loadComments(comments));
      });
  },

  updateComments: (id, comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      rating: comment.rating,
      comment: comment.text
    })
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.updateComments(comments));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {nearOffers: action.payload});
    case ActionType.LOAD_COMMENTS:
      return extend(state, {comments: action.payload});
    case ActionType.UPDATE_COMMENTS:
      return extend(state, {comments: action.payload});
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {activeOffer: action.payload});
    case ActionType.SET_PAGE_OFFER:
      return extend(state, {pageOffer: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
