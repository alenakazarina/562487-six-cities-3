import * as React from 'react';
import {OfferTypes} from '../../types';
import PlacesList from '../places-list/places-list';

type Props = {
  nearOffers: OfferTypes[]
};

const NearPlaces: React.FC<Props> = ({nearOffers}) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <PlacesList
      prefix={`near-places`}
      offers={nearOffers}
    />
  </section>
);

export default React.memo(NearPlaces);
