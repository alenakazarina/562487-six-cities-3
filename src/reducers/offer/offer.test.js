import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, Operation} from './offer';
import {cityOffers, apiMockOffers, reviews, apiMockReviews} from '../../mocks/const';
import Offer from '../../models/offer';
import Comment from '../../models/comment';

const api = createAPI(() => {});
const activeOfferId = 1;
const apiMock = new MockAdapter(api);

describe(`Offer reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeOffer: null,
      nearOffers: [],
      comments: []
    });
  });

  it(`Reducer should load near offers`, () => {
    expect(reducer({
      nearOffers: []
    }, {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: cityOffers
    })).toEqual({
      nearOffers: cityOffers
    });
  });

  it(`Reducer should load comments`, () => {
    expect(reducer({
      comments: []
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: reviews
    })).toEqual({
      comments: reviews
    });
  });

  it(`Reducer should update comments`, () => {
    const prevReviews = reviews.slice(0, 1);
    expect(reducer({
      comments: prevReviews
    }, {
      type: ActionType.UPDATE_COMMENTS,
      payload: reviews
    })).toEqual({
      comments: reviews
    });
  });

  it(`Reducer should set active offer`, () => {
    expect(reducer({
      activeOffer: null
    }, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: cityOffers[0]
    })).toEqual({
      activeOffer: cityOffers[0]
    });
  });

  it(`Reducer should reset active offer`, () => {
    expect(reducer({
      activeOffer: cityOffers[0]
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
    const adaptedApiMockOffers = Offer.parseOffers(apiMockOffers);

    apiMock
      .onGet(`/hotels/${activeOfferId}/nearby`)
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
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadComments(activeOfferId);
    const adaptedApiMockReviews = Comment.parseComments(apiMockReviews);

    apiMock
      .onGet(`/comments/${activeOfferId}`)
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

  it(`Should make a correct API call to /comments/:id - add comment case`, () => {
    const dispatch = jest.fn();
    const commentsUpdater = Operation.updateComments(activeOfferId, {
      rating: 4,
      text: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`
    });
    const adaptedApiMockReviews = Comment.parseComments(apiMockReviews);

    apiMock
      .onPost(`/comments/${activeOfferId}`)
      .reply(200, apiMockReviews);

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
