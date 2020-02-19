import React, {PureComponent} from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import {arrayOf} from 'prop-types';
import {reviewPropTypes} from '../../types';

class Reviews extends PureComponent {
  render() {
    const {reviews} = this.props;
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ReviewsList reviews={reviews} />
        <ReviewForm />
      </section>
    );
  }
}

Reviews.propTypes = {
  reviews: arrayOf(reviewPropTypes)
};

export default Reviews;
