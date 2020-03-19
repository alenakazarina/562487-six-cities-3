import React, {PureComponent} from 'react';
import {number, string, func, bool} from 'prop-types';
import RatingInput from '../rating-input/rating-input';
import SubmitButton from '../submit-button/submit-button';
import {RATINGS} from '../../const';

class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate({errorStatus, reviewsCount}) {
    if (errorStatus || reviewsCount !== this.props.reviewsCount) {
      this.props.setDisabled(false);
    }
  }

  _checkSubmitDisabled() {
    const {ratingValue, comment} = this.props;
    return (ratingValue === 0 || comment.length <= 50 || comment.length >= 300) ? true : false;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {
      ratingValue,
      comment,
      offerId,
      setDisabled,
      onReviewSubmit
    } = this.props;

    setDisabled(true);

    onReviewSubmit(offerId, {
      rating: ratingValue,
      text: comment
    });
  }

  render() {
    const {
      ratingValue,
      comment,
      isDisabled,
      onChange
    } = this.props;

    const isSubmitDisabled = isDisabled ? true : this._checkSubmitDisabled();

    return (
      <form className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <fieldset
          disabled={isDisabled}
          style={{border: `none`, padding: `0`}}
        >
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {RATINGS.map((rating) => (
              <RatingInput
                key={rating.value}
                rating={rating}
                isChecked={rating.value === ratingValue}
                onChange={onChange}
              />
            ))}
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"
            value={comment}
            onChange={onChange}
          />
        </fieldset>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <SubmitButton
            prefix="reviews"
            isDisabled={isSubmitDisabled}
          />
        </div>
      </form>
    );
  }
}

ReviewsForm.propTypes = {
  ratingValue: number.isRequired,
  comment: string.isRequired,
  errorStatus: number.isRequired,
  reviewsCount: number.isRequired,
  offerId: number.isRequired,
  isDisabled: bool.isRequired,
  setDisabled: func.isRequired,
  onChange: func.isRequired,
  onReviewSubmit: func.isRequired
};

export default ReviewsForm;
