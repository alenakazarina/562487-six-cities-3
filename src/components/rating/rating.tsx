import * as React from 'react';

const RATING_TO_WIDTH = Array.from({length: 6}, (it, i) => `${i * 20}%`);

type Props = {
  prefix: string,
  rating: number,
  isValue: boolean
};

const Rating: React.FC<Props> = ({prefix, rating, isValue}) => {
  const ratingValue = Math.round(rating);
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{width: `${RATING_TO_WIDTH[ratingValue]}`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isValue && <span className={`${prefix}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
};

export default React.memo(Rating);
