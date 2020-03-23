import React from 'react';
import {shape, number, string, func, bool} from 'prop-types';

const RatingInput = ({rating, isChecked, onChange}) => (
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

RatingInput.propTypes = {
  rating: shape({
    value: number.isRequired,
    title: string.isRequired
  }),
  isChecked: bool.isRequired,
  onChange: func.isRequired
};

export default React.memo(RatingInput);
