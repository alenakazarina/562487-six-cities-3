import * as React from 'react';
import {Review} from '../../types';
import ReviewsItem from '../reviews-item/reviews-item';

type Props = {
  reviews: Review[]
};

const ReviewsList: React.FC<Props> = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) =>
      <ReviewsItem key={review.id} review={review} />
    )}
  </ul>
);

export default React.memo(ReviewsList);
