import * as React from 'react';

const STARS_COUNT = 5;
const STAR_WIDTH_PERCENT = 100 / STARS_COUNT;
const RATING_TO_WIDTH = Array.from({length: STARS_COUNT + 1}, (it, i) => `${i * STAR_WIDTH_PERCENT}%`);

type Props = {
  prefix: string;
  rating: number;
  isValue: boolean;
}

const Rating: React.FC<Props> = (props: Props) => {
  const {prefix, rating, isValue} = props;
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
