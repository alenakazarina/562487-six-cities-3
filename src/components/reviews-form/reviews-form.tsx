import * as React from 'react';
import RatingInput from '../rating-input/rating-input';
import SubmitButton from '../submit-button/submit-button';
import {RATINGS} from '../../const';

interface Props {
  rating: number;
  text: string;
  errorStatus: number;
  reviewsCount: number;
  offerId: number;
  isDisabled: boolean;
  setDisabled: (status: boolean) => void;
  onChange: (evt: React.ChangeEvent) => void;
  onReviewSubmit: (id: number, userComment: {rating: string, text: string}) => void;
};

class ReviewsForm extends React.PureComponent<Props> {
  props: Props;

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
    const {rating, text} = this.props;
    return (rating === 0 || text.length <= 50 || text.length >= 300) ? true : false;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {
      rating,
      text,
      offerId,
      setDisabled,
      onReviewSubmit
    } = this.props;

    setDisabled(true);

    onReviewSubmit(offerId, {
      rating: rating,
      text: text
    });
  }

  render() {
    const {
      rating,
      text,
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
            {RATINGS.map((inputRating) => (
              <RatingInput
                key={inputRating.value}
                rating={inputRating}
                isChecked={inputRating.value === rating}
                onChange={onChange}
              />
            ))}
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"
            value={text}
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

export default ReviewsForm;
