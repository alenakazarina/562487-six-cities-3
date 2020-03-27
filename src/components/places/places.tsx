import * as React from 'react';
import {OfferTypes} from '../../types';
import Sort from '../sort/sort';
import PlacesList from '../places-list/places-list';
import withToggle from '../../hocs/with-toggle/with-toggle';
import {formatPluralNouns} from '../../utils';

const SortWithToggle = withToggle(Sort);

interface Props {
  offers: OfferTypes[];
  activeSortType: string;
  onSortTypeChange: (sortType: string) => void;
};

const Places: React.FC<Props> = ({offers, activeSortType, onSortTypeChange}) => (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{formatPluralNouns(offers.length, `place`)} to stay in {offers[0].city.name}</b>
      <SortWithToggle
        activeSortType={activeSortType}
        onSortTypeChange={onSortTypeChange}
      />
      <PlacesList
        prefix={`cities`}
        offers={offers}
      />
    </section>
);

export default React.memo(Places);
