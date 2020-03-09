import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, Operation} from './favorites';
import {favoriteOffers, cityOffers, apiMockOffers} from '../../mocks/const';
import Offer from '../../models/offer';

const api = createAPI(() => {});

describe(`Favorites reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      favorites: []
    });
  });

  it(`Reducer should load favorites`, () => {
    expect(reducer({
      favorites: []
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: favoriteOffers
    })).toEqual({
      favorites: favoriteOffers
    });
  });

  it(`Reducer should add favorite`, () => {
    const initialFavorites = favoriteOffers.slice(0, 2);
    const newFavorite = favoriteOffers[2];
    expect(reducer({
      favorites: initialFavorites
    }, {
      type: ActionType.UPDATE_FAVORITES,
      payload: newFavorite
    })).toEqual({
      favorites: favoriteOffers
    });
  });

  it(`Reducer should remove favorite`, () => {
    const updatedFavorites = favoriteOffers.slice(0, 2);
    expect(reducer({
      favorites: favoriteOffers
    }, {
      type: ActionType.UPDATE_FAVORITES,
      payload: cityOffers[2]
    })).toEqual({
      favorites: updatedFavorites
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = Operation.loadFavorites();
    const adaptedApiMockOffers = Offer.parseOffers(apiMockOffers);
    apiMock
      .onGet(`/favorite`)
      .reply(200, apiMockOffers);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: adaptedApiMockOffers
        });
      });
  });
});
