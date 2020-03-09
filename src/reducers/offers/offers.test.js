import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, Operation} from './offers';
import {cityOffers, apiMockOffers} from '../../mocks/const';
import Offer from '../../models/offer';

const api = createAPI(() => {});

describe(`Offers reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
      activeCity: ``
    });
  });

  it(`Reducer should load offers`, () => {
    expect(reducer({
      offers: []
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: cityOffers
    })).toEqual({
      offers: cityOffers
    });
  });

  it(`Reducer should set active city`, () => {
    const prevActiveCity = `Cologne`;
    const nextActiveCity = `Paris`;
    expect(reducer({
      activeCity: prevActiveCity
    }, {
      type: ActionType.SET_ACTIVE_CITY,
      payload: nextActiveCity
    })).toEqual({
      activeCity: nextActiveCity
    });
  });

  it(`Reducer should update offers`, () => {
    expect(reducer({
      offers: cityOffers
    }, {
      type: ActionType.UPDATE_OFFERS
    })).toEqual({
      offers: cityOffers
    });
  });

  it(`Reducer should toggle favorite status `, () => {
    const updatedOffers = cityOffers.map((offer, i) => {
      if (i === 0) {
        offer.isFavorite = !offer.isFavorite;
      }
      return offer;
    });
    expect(reducer({
      offers: cityOffers
    }, {
      type: ActionType.UPDATE_OFFERS,
      payload: 1
    })).toEqual({
      offers: updatedOffers
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();
    const adaptedApiMockOffers = Offer.parseOffers(apiMockOffers);
    apiMock
      .onGet(`/hotels`)
      .reply(200, apiMockOffers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: adaptedApiMockOffers
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_ACTIVE_CITY,
          payload: adaptedApiMockOffers[0].city.name
        });
      });
  });
});
