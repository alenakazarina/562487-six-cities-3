import {getSortedOffers} from './with-sort';
import {SortType} from '../../const';
import {CITY_OFFERS} from '../../mocks/const';

describe(`getSortedOffers`, () => {
  it(`should return initial offers sorted by Popular sort type`, () => {
    expect(getSortedOffers(CITY_OFFERS, SortType.POPULAR)).toEqual(CITY_OFFERS);
  });

  it(`should return offers sorted by Price: low to high sort type`, () => {
    expect(getSortedOffers(CITY_OFFERS, SortType.PRICE_TO_HIGH)).toEqual(CITY_OFFERS);
  });

  it(`should return offers sorted by Price: high to low sort type`, () => {
    expect(getSortedOffers(CITY_OFFERS, SortType.PRICE_TO_LOW)).toEqual(CITY_OFFERS.slice().reverse());
  });

  it(`should return offers sorted by Top rated first sort type`, () => {
    expect(getSortedOffers(CITY_OFFERS, SortType.TOP_RATED)).toEqual(CITY_OFFERS);
  });
});
