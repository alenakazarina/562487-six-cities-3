import * as React from 'react';
import {OfferTypes} from '../../types';
import PlaceCard from '../place-card/place-card';
import LocationsListItem from '../locations-list-item/locations-list-item';

interface Props {
  isActive: boolean;
  city: string;
  offers: OfferTypes[];
}

const FavoritesListItem: React.FC<Props> = (props: Props) => {
  const {city, offers, isActive} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <LocationsListItem
          nodeType="div"
          city={city}
          isActive={isActive}
        />
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            prefix={`favorites`}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
};

export default React.memo(FavoritesListItem);
