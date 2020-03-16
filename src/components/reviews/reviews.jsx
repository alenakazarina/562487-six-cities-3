import React from 'react';
import {arrayOf, bool, func, number} from 'prop-types';
import {reviewPropTypes, offerPropTypes} from '../../types';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import withRating from '../../hocs/with-rating/with-rating';

const ReviewsFormWrapped = withRating(ReviewsForm);

const Reviews = (props) => {
  const {
    isAuth,
    activeOffer,
    reviews,
    errorStatus,
    onReviewSubmit
  } = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews.length ? <ReviewsList reviews={reviews} /> : ``}
      {isAuth ? <ReviewsFormWrapped
        reviewsCount={reviews.length}
        activeOffer={activeOffer}
        errorStatus={errorStatus}
        onReviewSubmit={onReviewSubmit}
      /> : ``}
    </section>
  );
};

Reviews.propTypes = {
  isAuth: bool.isRequired,
  activeOffer: offerPropTypes,
  reviews: arrayOf(reviewPropTypes),
  errorStatus: number.isRequired,
  onReviewSubmit: func.isRequired
};

export default React.memo(Reviews);
