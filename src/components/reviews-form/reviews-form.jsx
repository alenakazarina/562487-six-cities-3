import React, {PureComponent, createRef} from 'react';
import {number, string, func} from 'prop-types';
import RatingInput from '../rating-input/rating-input';
import {RATINGS} from '../../const';

class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this._submitButtonRef = createRef();
    this._fieldsetRef = createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    this._submitButtonRef.current.disabled = true;
  }

  componentDidUpdate(prevProps) {
    this._checkSubmitDisabled();

    if (this.props.errorStatus || prevProps.reviewsCount !== this.props.reviewsCount) {
      this._fieldsetRef.current.disabled = false;
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._submitButtonRef.current.disabled = true;
    this._fieldsetRef.current.disabled = true;
    this.props.onSubmit();
  }

  _checkSubmitDisabled() {
    const {ratingValue, comment} = this.props;
    if (ratingValue === 0 || comment.length <= 50 || comment.length >= 300) {
      this._submitButtonRef.current.disabled = true;
    } else {
      this._submitButtonRef.current.disabled = false;
    }
  }

  render() {
    const {
      ratingValue,
      comment,
      onChange
    } = this.props;

    return (
      <form className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <fieldset
          ref={this._fieldsetRef}
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
          <button
            ref={this._submitButtonRef}
            className="reviews__submit form__submit button"
            type="submit"
          >Submit</button>
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
  onChange: func.isRequired,
  onSubmit: func.isRequired
};

export default ReviewsForm;
