import React from 'react';
import {string, arrayOf, func} from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerPropTypes} from '../../types';

const PlacesList = (props) => {
  const {
    prefix,
    offers,
    onTitleClick,
    onCardMouseEnter
  } = props;

  const className = (prefix === `cities`) ?
    `cities__places-list places__list tabs__content`
    : `near-places__list places__list`;

  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          prefix={prefix}
          offer={offer}
          onTitleClick={onTitleClick}
          onCardMouseEnter={onCardMouseEnter}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  prefix: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onCardMouseEnter: func.isRequired
};

export default React.memo(PlacesList);
