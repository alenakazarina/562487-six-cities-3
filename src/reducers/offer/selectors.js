import Namespace from '../namespace';
import {createSelector} from 'reselect';

const NAMESPACE = Namespace.OFFER;
const MAX_NEAR_OFFERS_COUNT_TO_SHOW = 3;
const MAX_COMMENTS_COUNT_TO_SHOW = 10;

export const getActiveOffer = (state) => state[NAMESPACE].activeOffer;

export const getNearOffers = (state) => state[NAMESPACE].nearOffers;

export const getNearOffersToShow = (state) => state[NAMESPACE].nearOffers.slice(0, MAX_NEAR_OFFERS_COUNT_TO_SHOW);

export const getComments = (state) => state[NAMESPACE].comments;

export const getSortedComments = createSelector(
    getComments,
    (comments) => comments.slice().sort((firstComment, secondComment) =>
      new Date(secondComment.date) - new Date(firstComment.date))
);

export const getCommentsToShow = createSelector(
    getSortedComments,
    (comments) => comments.slice(0, MAX_COMMENTS_COUNT_TO_SHOW)
);

export const getRatingToShow = createSelector(
    getComments,
    (comments) => comments.length ? comments.reduce((ratingValue, currentComment) => ratingValue + currentComment.rating, 0) : 0,
    (ratingValuesSum) => Math.round(ratingValuesSum)
);


