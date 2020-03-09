import {reducer, ActionCreator, ActionType, AuthStatus, DEFAULT_USER} from './user';

describe(`User reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authStatus: AuthStatus.NO_AUTH,
      user: DEFAULT_USER
    });
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
