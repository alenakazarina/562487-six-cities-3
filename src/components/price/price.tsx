import * as React from 'react';

type Props = {
  prefix: string,
  price: number
};

const Price: React.FC<Props> = ({prefix, price}) => {
  const priceText = prefix === `property` ? ` night` : `/ night`;
  return (
    <div className={`${prefix}__price`}>
      <b className={`${prefix}__price-value`}>&euro;{price}</b>
      <span className={`${prefix}__price-text`}
        style={{marginLeft: `3px`}}
      >{priceText}</span>
    </div>
  );
};

export default React.memo(Price);
