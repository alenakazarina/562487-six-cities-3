import * as React from 'react';

type Rating = {
  value: number;
  title: string;
}

interface Props {
  rating: Rating;
  isChecked: boolean;
  onChange: (evt: React.ChangeEvent) => void;
}

const RatingInput: React.FC<Props> = (props: Props) => {
  const {rating, isChecked, onChange} = props;
  return (
    <>
      <input className="form__rating-input visually-hidden"
        type="radio"
        name="rating"
        value={rating.value}
        id={`${rating.value}-stars`}
        checked={isChecked}
        onChange={onChange}
      />
      <label className="reviews__rating-label form__rating-label"
        htmlFor={`${rating.value}-stars`}
        title={rating.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

export default React.memo(RatingInput);
