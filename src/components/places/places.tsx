import React from 'react';
import {arrayOf, func, string} from 'prop-types';
import {offerPropTypes} from '../../types';
import Sort from '../sort/sort';
import PlacesList from '../places-list/places-list';
import withToggle from '../../hocs/with-toggle/with-toggle';
import {formatPluralNouns} from '../../utils';

const SortWithToggle = withToggle(Sort);

const Places = (props) => {
  const {
    offers,
    activeSortType,
    onSortTypeChange
  } = props;

  return (
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
};

Places.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  activeSortType: string.isRequired,
  onSortTypeChange: func.isRequired
};

export default React.memo(Places);
