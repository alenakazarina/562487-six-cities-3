import {reducer, ActionType} from './errors';

describe(`Errors reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      errorStatus: 0
    });
  });

  it(`Reducer should set error status`, () => {
    expect(reducer({
      errorStatus: 0
    }, {
      type: ActionType.SET_ERROR_STATUS,
      payload: 404
    })).toEqual({
      errorStatus: 404
    });
  });

  it(`Reducer should reset error status`, () => {
    expect(reducer({
      errorStatus: 404
    }, {
      type: ActionType.RESET_ERROR,
      payload: 0
    })).toEqual({
      errorStatus: 0
    });
  });
});
