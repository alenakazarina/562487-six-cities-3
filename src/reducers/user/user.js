import {extend} from '../../utils';
import User from '../../models/user';

const DEFAULT_USER = {
  id: -1,
  email: ``,
  name: ``,
  isPro: false,
  avatarUrl: ``
};

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  user: DEFAULT_USER
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_USER: `SET_USER`
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user
  })
};

const onUserOperationSuccess = (response, dispatch) => {
  const user = User.parseUser(response.data);
  dispatch(ActionCreator.requireAuthorization(AuthStatus.AUTH));
  dispatch(ActionCreator.setUser(user));
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        onUserOperationSuccess(response, dispatch);
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        onUserOperationSuccess(response, dispatch);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {authStatus: action.payload});
    case ActionType.SET_USER:
      return extend(state, {user: action.payload});
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
