import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, Operation} from './offer';
import {cityOffers, apiMockOffers, reviews, apiMockReviews} from '../../mocks/const';
import Offer from '../../models/offer';
import Comment from '../../models/comment';

const api = createAPI(() => {});

describe(`Offer reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: []
    });
  });

  it(`Reducer should load near offers`, () => {
    expect(reducer({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: []
    }, {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: cityOffers
    })).toEqual({
      pageOffer: null,
      activeOffer: null,
      nearOffers: cityOffers,
      comments: []
    });
  });

  it(`Reducer should load comments`, () => {
    expect(reducer({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: []
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: reviews
    })).toEqual({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: reviews
    });
  });

  it(`Reducer should update comments`, () => {
    const prevReviews = reviews.slice(0, 1);
    expect(reducer({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: prevReviews
    }, {
      type: ActionType.UPDATE_COMMENTS,
      payload: reviews
    })).toEqual({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: reviews
    });
  });

  it(`Reducer should set page offer`, () => {
    expect(reducer({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: []
    }, {
      type: ActionType.SET_PAGE_OFFER,
      payload: cityOffers[0]
    })).toEqual({
      pageOffer: cityOffers[0],
      activeOffer: null,
      nearOffers: [],
      comments: []
    });
  });

  it(`Reducer should set active offer`, () => {
    expect(reducer({
      pageOffer: null,
      activeOffer: null,
      nearOffers: [],
      comments: []
    }, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: cityOffers[0]
    })).toEqual({
      pageOffer: null,
      activeOffer: cityOffers[0],
      nearOffers: [],
      comments: []
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const pageOfferId = 1;
    const nearOffersLoader = Operation.loadNearOffers({id: pageOfferId});
    const adaptedApiMockOffers = Offer.parseOffers(apiMockOffers);

    apiMock
      .onGet(`/hotels/${pageOfferId}/nearby`)
      .reply(200, apiMockOffers);

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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const pageOfferId = 1;
    const commentsLoader = Operation.loadComments({id: pageOfferId});
    const adaptedApiMockReviews = Comment.parseComments(apiMockReviews);

    apiMock
      .onGet(`/comments/${pageOfferId}`)
      .reply(200, apiMockReviews);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: adaptedApiMockReviews
        });
      });
  });
});
