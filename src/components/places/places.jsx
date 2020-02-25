import React from 'react';
import {arrayOf, func, string} from 'prop-types';
import {offerPropTypes} from '../../types';
import Sort from '../sort/sort';
import PlacesList from '../places-list/places-list';
import withToggle from '../../hocs/with-toggle/with-toggle';

const SortWithToggle = withToggle(Sort);

const Places = (props) => {
  const {
    offers,
    onTitleClick,
    activeSortType,
    onSortTypeChange,
    onCardMouseOver
  } = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {offers[0].city.name}</b>
      <SortWithToggle
        activeSortType={activeSortType}
        onSortTypeChange={onSortTypeChange}
      />
      <PlacesList
        prefix={`cities`}
        offers={offers}
        onTitleClick={onTitleClick}
        onCardMouseOver={onCardMouseOver}
      />
    </section>
  );
};

Places.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  activeSortType: string.isRequired,
  onSortTypeChange: func.isRequired,
  onCardMouseOver: func.isRequired
};

export default Places;
