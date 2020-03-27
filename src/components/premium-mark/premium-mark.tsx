import * as React from 'react';

type Props = {
  prefix: `place-card` | `property`;
}

const PremiumMark: React.FC<Props> = (props: Props) => {
  const {prefix} = props;
  return (
    <div className={`${prefix}__mark`}>
      <span>Premium</span>
    </div>
  );
};

export default React.memo(PremiumMark);
