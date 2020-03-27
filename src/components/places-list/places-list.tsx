import * as React from 'react';
import {OfferTypes} from '../../types';
import PlaceCard from '../place-card/place-card';

type Props = {
  prefix: string,
  offers: OfferTypes[]
};

const PlacesList: React.FC<Props> = ({prefix, offers}) => {
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

export default React.memo(PlacesList);
