import MockAdapter from 'axios-mock-adapter';
import API from '../../api';
import {reducer, ActionType, Operation} from './favorites';
import {FAVORITE_OFFERS, CITY_OFFERS, API_MOCK_OFFERS} from '../../mocks/const';
import Offer from '../../models/offer/offer';

const api = new API();
api.create({});
const apiMock = new MockAdapter(api.getAxios());

describe(`Favorites reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({});
  });

  it(`Reducer should load favorites`, () => {
    expect(reducer({
      favorites: []
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: FAVORITE_OFFERS
    })).toEqual({
      favorites: FAVORITE_OFFERS
    });
  });

  it(`Reducer should add favorite`, () => {
    const initialFavorites = FAVORITE_OFFERS.slice(1, 3);
    const newFavorite = FAVORITE_OFFERS[0];
    expect(reducer({
      favorites: initialFavorites
    }, {
      type: ActionType.ADD_FAVORITE,
      payload: newFavorite
    })).toEqual({
      favorites: FAVORITE_OFFERS
    });
  });

  it(`Reducer should remove favorite`, () => {
    const updatedFavorites = FAVORITE_OFFERS.slice(0, 2);
    expect(reducer({
      favorites: FAVORITE_OFFERS
    }, {
      type: ActionType.REMOVE_FAVORITE,
      payload: CITY_OFFERS[2]
    })).toEqual({
      favorites: updatedFavorites
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /favorite`, function () {
    const dispatch = jest.fn();
    const favoritesLoader = Operation.loadFavorites();
    const adaptedApiMockOffers = Offer.parseOffers(API_MOCK_OFFERS);
    apiMock
      .onGet(`/favorite`)
      .reply(200, API_MOCK_OFFERS);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: adaptedApiMockOffers
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/1 to add`, function () {
    const dispatch = jest.fn();
    const favoritesUpdater = Operation.addFavorite(1);
    const adaptedApiMockOffer = Offer.parseOffer(API_MOCK_OFFERS[0]);
    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, API_MOCK_OFFERS[0]);

    return favoritesUpdater(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_FAVORITE,
          payload: adaptedApiMockOffer
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/0 to remove`, function () {
    const dispatch = jest.fn();
    const favoritesRemover = Operation.removeFavorite(1);
    const notFavoriteOffer = Object.assign({}, API_MOCK_OFFERS[0], {'is_favorite': false});
    const adaptedNotFavoriteOffer = Offer.parseOffer(notFavoriteOffer);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, notFavoriteOffer);

    return favoritesRemover(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REMOVE_FAVORITE,
          payload: adaptedNotFavoriteOffer
        });
      });
  });
});
