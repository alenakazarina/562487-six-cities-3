import {getSortedOffers} from './with-sort';
import {SortType} from '../../const';
import {cityOffers} from '../../mocks/tests';

describe(`getSortedOffers`, () => {
  it(`should return initial offers sorted by Popular sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.POPULAR)).toEqual(cityOffers);
  });

  it(`should return offers sorted by Price: low to high sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.PRICE_TO_HIGH)).toEqual(cityOffers);
  });

  it(`should return offers sorted by Price: high to low sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.PRICE_TO_LOW)).toEqual(cityOffers.reverse());
  });

  it(`should return offers sorted by Top rated first sort type`, () => {
    expect(getSortedOffers(cityOffers, SortType.TOP_RATED)).toEqual(cityOffers);
  });
});
