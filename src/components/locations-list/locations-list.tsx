import * as React from 'react';
import LocationsListItem from '../locations-list-item/locations-list-item';

interface Props {
  cities: string[];
  activeCity: string;
};

const LocationsList: React.FC<Props> = ({cities, activeCity}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <LocationsListItem
            key={city}
            nodeType="li"
            city={city}
            isActive={city === activeCity}
          />
        ))}
      </ul>
    </section>
  </div>
);

export default React.memo(LocationsList);
