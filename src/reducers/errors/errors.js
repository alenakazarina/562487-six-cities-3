import {extend} from '../../utils';

const initialState = {
  errorStatus: 0
};

const ActionType = {
  SET_ERROR_STATUS: `SET_ERROR_STATUS`,
  RESET_ERROR: `RESET_ERROR`
};

const ActionCreator = {
  setErrorStatus: (errStatus) => ({
    type: ActionType.SET_ERROR_STATUS,
    payload: errStatus
  }),
  resetError: () => ({
    type: ActionType.RESET_ERROR,
    payload: 0
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ERROR_STATUS:
      return extend(state, {errorStatus: action.payload});
    case ActionType.RESET_ERROR:
      return extend(state, {errorStatus: action.payload});
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
