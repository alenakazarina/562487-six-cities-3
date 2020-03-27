import * as React from 'react';

type Props = {
  description: string;
}

const PropertyDescription: React.FC<Props> = (props: Props) => {
  const {description} = props;
  return (
    <div className="property__description">
      <p className="property__text">{description}</p>
    </div>
  );
};

export default React.memo(PropertyDescription);
