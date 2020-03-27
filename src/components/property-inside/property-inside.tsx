import * as React from 'react';

type Props = {
  amenities: string[];
}

const PropertyInside: React.FC<Props> = (props: Props) => {
  const {amenities} = props;
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {amenities.map((amenity, index) => (
          <li key={index} className="property__inside-item">{amenity}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(PropertyInside);
