import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {cityOffers} from '../mocks/tests';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      initialOffers: [],
      offers: [],
      cities: [],
      activeOffer: null,
      activeCity: ``
    });
  });

  it(`Reducer should set active city by a given city`, () => {
    const city = `Amsterdam`;
    expect(reducer({
      initialOffers: cityOffers,
      offers: [],
      cities: [],
      activeOffer: null,
      activeCity: ``
    }, {
      type: ActionType.SET_ACTIVE_CITY,
      payload: city,
    })).toEqual({
      initialOffers: cityOffers,
      offers: [],
      cities: [],
      activeOffer: null,
      activeCity: city
    });
  });

  it(`Reducer should set active offer by a given offer`, () => {
    expect(reducer({
      initialOffers: cityOffers,
      offers: [],
      cities: [],
      activeOffer: null,
      activeCity: ``
    }, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: cityOffers[0],
    })).toEqual({
      initialOffers: cityOffers,
      offers: [],
      cities: [],
      activeOffer: cityOffers[0],
      activeCity: ``
    });
  });

  it(`Reducer should get offers by a given city and initialOffers`, () => {
    const city = `Amsterdam`;
    expect(reducer({
      initialOffers: cityOffers,
      offers: [],
      cities: [],
      activeOffer: null,
      activeCity: ``
    }, {
      type: ActionType.GET_OFFERS,
      payload: city
    })).toEqual({
      initialOffers: cityOffers,
      offers: cityOffers,
      cities: [],
      activeOffer: null,
      activeCity: ``
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting active city returns correct action`, () => {
    const city = `Amsterdam`;
    expect(ActionCreator.setActiveCity(city)).toEqual({
      type: ActionType.SET_ACTIVE_CITY,
      payload: city
    });
  });

  it(`Action creator for setting active offer returns correct action`, () => {
    const offer = cityOffers[0];
    expect(ActionCreator.setActiveOffer(offer)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: offer
    });
  });

  it(`Action creator for getting offers returns correct action`, () => {
    const city = `Amsterdam`;
    expect(ActionCreator.getOffers(city)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: city
    });
  });
});
