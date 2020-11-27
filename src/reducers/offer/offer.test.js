import MockAdapter from 'axios-mock-adapter';
import API from '../../api';
import {reducer, ActionType, Operation} from './offer';
import {CITY_OFFERS, API_MOCK_OFFERS, REVIEWS, API_MOCK_REVIEWS} from '../../mocks/const';
import Offer from '../../models/offer/offer';
import Comment from '../../models/comment/comment';

const activeOfferId = 1;
const api = new API();
api.create({});
const apiMock = new MockAdapter(api.getAxios());

describe(`Offer reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({});
  });

  it(`Reducer should load near offers`, () => {
    expect(reducer({
      nearOffers: []
    }, {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: CITY_OFFERS
    })).toEqual({
      nearOffers: CITY_OFFERS
    });
  });

  it(`Reducer should load comments`, () => {
    expect(reducer({
      comments: []
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: REVIEWS
    })).toEqual({
      comments: REVIEWS
    });
  });

  it(`Reducer should update comments`, () => {
    const prevReviews = REVIEWS.slice(0, 1);
    expect(reducer({
      comments: prevReviews
    }, {
      type: ActionType.UPDATE_COMMENTS,
      payload: REVIEWS
    })).toEqual({
      comments: REVIEWS
    });
  });

  it(`Reducer should set active offer`, () => {
    expect(reducer({
      activeOffer: null
    }, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: CITY_OFFERS[0]
    })).toEqual({
      activeOffer: CITY_OFFERS[0]
    });
  });

  it(`Reducer should reset active offer`, () => {
    expect(reducer({
      activeOffer: CITY_OFFERS[0]
    }, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: null
    })).toEqual({
      activeOffer: null
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels/:id/nearby`, () => {
    const dispatch = jest.fn();
    const nearOffersLoader = Operation.loadNearOffers(activeOfferId);
    const adaptedApiMockOffers = Offer.parseOffers(API_MOCK_OFFERS);

    apiMock
      .onGet(`/hotels/${activeOfferId}/nearby`)
      .reply(200, API_MOCK_OFFERS);

    return nearOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_OFFERS,
          payload: adaptedApiMockOffers
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadComments(activeOfferId);
    const adaptedApiMockReviews = Comment.parseComments(API_MOCK_REVIEWS);

    apiMock
      .onGet(`/comments/${activeOfferId}`)
      .reply(200, API_MOCK_REVIEWS);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: adaptedApiMockReviews
        });
      });
  });

  it(`Should make a correct API call to /comments/:id - add comment case`, () => {
    const dispatch = jest.fn();
    const commentsUpdater = Operation.updateComments(activeOfferId, {
      rating: 4,
      text: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`
    });
    const adaptedApiMockReviews = Comment.parseComments(API_MOCK_REVIEWS);

    apiMock
      .onPost(`/comments/${activeOfferId}`)
      .reply(200, API_MOCK_REVIEWS);

    return commentsUpdater(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_COMMENTS,
          payload: adaptedApiMockReviews
        });
      });
  });
});
