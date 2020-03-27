import * as React from 'react';
import {Review, Comment, OfferTypes} from '../../types';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import withDisabled from '../../hocs/with-disabled/with-disabled';
import withRating from '../../hocs/with-rating/with-rating';

interface Props {
  isAuth: boolean;
  activeOffer: OfferTypes;
  errorStatus: number;
  reviews: Review[];
  reviewsCount: number;
  onReviewSubmit: (id: number, userComment: Comment) => void;
};

const ReviewsFormWrapped = withDisabled(withRating(ReviewsForm));

const Reviews: React.FC<Props> = ({
  isAuth,
  activeOffer,
  errorStatus,
  reviews,
  reviewsCount,
  onReviewSubmit
}) => (
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

export default React.memo(Reviews);
