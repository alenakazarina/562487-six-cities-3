import React from 'react';
import {string, arrayOf, func} from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerPropTypes} from '../../types';
import withHover from '../../hocs/with-hover/with-hover';

const PlaceCardWithHover = withHover(PlaceCard);

const PlacesList = (props) => {
  const {
    prefix,
    offers,
    onTitleClick,
    onCardHoverChange
  } = props;

  const className = (prefix === `cities`) ?
    `cities__places-list places__list tabs__content`
    : `near-places__list places__list`;

  return (
    <div
      className={className}
      onMouseLeave={() => onCardHoverChange(null)}
    >
      {offers.map((offer) => (
        <PlaceCardWithHover
          key={offer.id}
          prefix={prefix}
          offer={offer}
          onTitleClick={onTitleClick}
          onCardHoverChange={onCardHoverChange}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  prefix: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onCardHoverChange: func.isRequired
};

export default React.memo(PlacesList);
