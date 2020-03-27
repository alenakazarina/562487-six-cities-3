import * as React from 'react';

type Props = {
  prefix: `place-card` | `property`;
};

const PremiumMark: React.FC<Props> = ({prefix}) => (
  <div className={`${prefix}__mark`}>
    <span>Premium</span>
  </div>
);

export default React.memo(PremiumMark);
