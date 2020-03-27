import * as React from 'react';
import {formatPluralNouns} from '../../utils';

interface Props {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

const Features: React.FC<Props> = ({type, bedrooms, maxAdults}) => (
  <ul className="property__features">
    <li className="property__feature property__feature--entire">
      {type}
    </li>
    <li className="property__feature property__feature--bedrooms">
      {formatPluralNouns(bedrooms, `Bedroom`)}
    </li>
    <li className="property__feature property__feature--adults">
      Max {formatPluralNouns(maxAdults, `adult`)}
    </li>
  </ul>
);

export default React.memo(Features);
