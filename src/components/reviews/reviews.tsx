import React from 'react';
import {arrayOf, bool, func, number} from 'prop-types';
import {reviewPropTypes, offerPropTypes} from '../../types';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import withRating from '../../hocs/with-rating/with-rating';
import withDisabled from '../../hocs/with-disabled/with-disabled';

const ReviewsFormWrapped = withDisabled(withRating(ReviewsForm));

const Reviews = (props) => {
  const {
    isAuth,
    activeOffer,
    errorStatus,
    reviews,
    reviewsCount,
    onReviewSubmit
  } = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviewsCount ? <ReviewsList reviews={reviews} /> : ``}
      {isAuth ? <ReviewsFormWrapped
        reviewsCount={reviewsCount}
        offerId={activeOffer.id}
        errorStatus={errorStatus}
        onReviewSubmit={onReviewSubmit}
      /> : ``}
    </section>
  );
};

Reviews.propTypes = {
  isAuth: bool.isRequired,
  activeOffer: offerPropTypes,
  errorStatus: number.isRequired,
  reviews: arrayOf(reviewPropTypes),
  reviewsCount: number.isRequired,
  onReviewSubmit: func.isRequired
};

export default React.memo(Reviews);
