import MockAdapter from 'axios-mock-adapter';
import API from '../../api';
import {Operation, reducer, ActionCreator, ActionType, DEFAULT_USER} from './user';
import {API_MOCK_APP_USER} from '../../mocks/const';
import User from '../../models/user/user';
import {AuthStatus} from '../../const';

const api = new API();
api.create({});
const apiMock = new MockAdapter(api.getAxios());

describe(`User reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({});
  });

  it(`Reducer should change authStatus by a given value`, () => {
    expect(reducer({
      authStatus: AuthStatus.NO_AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH
    })).toEqual({
      authStatus: AuthStatus.AUTH,
      user: DEFAULT_USER
    });

    expect(reducer({
      authStatus: AuthStatus.AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.NO_AUTH
    })).toEqual({
      authStatus: AuthStatus.NO_AUTH,
      user: DEFAULT_USER
    });

    expect(reducer({
      authStatus: AuthStatus.AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH,
    })).toEqual({
      authStatus: AuthStatus.AUTH,
      user: DEFAULT_USER
    });

    expect(reducer({
      authStatus: AuthStatus.NO_AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.NO_AUTH
    })).toEqual({
      authStatus: AuthStatus.NO_AUTH,
      user: DEFAULT_USER
    });
  });

  it(`Reducer should set user`, () => {
    const nextUser = {
      id: 1,
      email: `keks@gmail.com`,
      name: `Keks`,
      isPro: true,
      avatarUrl: `keksAvatar`
    };
    expect(reducer({
      authStatus: AuthStatus.AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.SET_USER,
      payload: nextUser
    })).toEqual({
      authStatus: AuthStatus.AUTH,
      user: nextUser
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.NO_AUTH
    });

    expect(ActionCreator.requireAuthorization(AuthStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /login - check auth success`, function () {
    const dispatch = jest.fn();
    const authChecker = Operation.checkAuth();
    const adaptedUser = User.parseUser(API_MOCK_APP_USER);
    apiMock
      .onGet(`/login`)
      .reply(200, API_MOCK_APP_USER);

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER,
          payload: adaptedUser
        });
      });
  });
  it(`Should make a correct API call to /login - login success`, function () {
    const dispatch = jest.fn();
    const loginer = Operation.login({
      login: `alena@gmail.com`,
      password: `6_cities`
    });
    const adaptedUser = User.parseUser(API_MOCK_APP_USER);
    apiMock
      .onPost(`/login`)
      .reply(200, API_MOCK_APP_USER);

    return loginer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER,
          payload: adaptedUser
        });
      });
  });
});
