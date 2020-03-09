import React from 'react';
import {number, string, func, bool} from 'prop-types';
import {connect} from 'react-redux';
import {getPageOffer} from '../../reducers/offer/selectors';
import {Operation as OfferOperation} from '../../reducers/offer/offer';
import RatingInput from '../rating-input/rating-input';
import {RATINGS} from '../../const';

const ReviewsForm = (props) => {
  const {
    hotelId,
    ratingValue,
    comment,
    isDisabled,
    onRatingChange,
    onTextChange,
    onReviewSubmit,
    resetFormInputs
  } = props;

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onReviewSubmit(hotelId, {
          rating: ratingValue,
          text: comment
        });
        resetFormInputs();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating) => (
          <RatingInput
            key={rating.value}
            rating={rating}
            isChecked={rating.value === ratingValue}
            onChange={onRatingChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={onTextChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  hotelId: number.isRequired,
  ratingValue: number.isRequired,
  comment: string.isRequired,
  isDisabled: bool.isRequired,
  onRatingChange: func.isRequired,
  onTextChange: func.isRequired,
  onReviewSubmit: func.isRequired,
  resetFormInputs: func.isRequired
};

const mapStateToProps = (state) => ({
  hotelId: getPageOffer(state).id
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, comment) {
    dispatch(OfferOperation.updateComments(id, comment));
  }
});

export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
