import React from 'react';
import {string, arrayOf} from 'prop-types';
import {offerPropTypes} from '../../types';
import PlaceCard from '../place-card/place-card';

const PlacesList = (props) => {
  const {
    prefix,
    offers
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
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  prefix: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired
};

export default React.memo(PlacesList);
