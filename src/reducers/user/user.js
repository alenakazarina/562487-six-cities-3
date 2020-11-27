import {extend} from '../../utils';
import User from '../../models/user/user';
import {AuthStatus} from '../../const';

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
    return api.checkAuth()
      .then((response) => {
        onUserOperationSuccess(response, dispatch);
      })
      .catch(() => {});
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.login(authData)
      .then((response) => {
        onUserOperationSuccess(response, dispatch);
      })
      .catch(() => {});
  },
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {authStatus: action.payload});
    case ActionType.SET_USER:
      return extend(state, {user: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
