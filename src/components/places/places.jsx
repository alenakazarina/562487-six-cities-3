import React from 'react';
import {arrayOf, func, string} from 'prop-types';
import {offerPropTypes} from '../../types';
import Sort from '../sort/sort';
import PlacesList from '../places-list/places-list';
import withToggle from '../../hocs/with-toggle/with-toggle';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {formatPluralNouns} from '../../utils';

const PlacesListWrapped = withActiveItem(PlacesList, `places-list`);
const SortWithToggle = withToggle(Sort);

const Places = (props) => {
  const {
    offers,
    onTitleClick,
    activeSortType,
    onSortTypeChange,
    onCardMouseEnter,
    onCardMouseLeave
  } = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{formatPluralNouns(offers.length, `place`)} to stay in {offers[0].city.name}</b>
      <SortWithToggle
        activeSortType={activeSortType}
        onSortTypeChange={onSortTypeChange}
      />
      <PlacesListWrapped
        prefix={`cities`}
        offers={offers}
        onTitleClick={onTitleClick}
        onCardMouseEnter={onCardMouseEnter}
        onCardMouseLeave={onCardMouseLeave}
      />
    </section>
  );
};

Places.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  activeSortType: string.isRequired,
  onSortTypeChange: func.isRequired,
  onCardMouseEnter: func.isRequired,
  onCardMouseLeave: func.isRequired,
};

export default React.memo(Places);
