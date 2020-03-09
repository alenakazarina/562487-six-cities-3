import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import {arrayOf, bool} from 'prop-types';
import {reviewPropTypes} from '../../types';
import {getCommentsToShow} from '../../reducers/offer/selectors';
import {getAuthStatus} from '../../reducers/user/selectors';
import {AuthStatus} from '../../reducers/user/user';
import withRating from '../../hocs/with-rating/with-rating';

const ReviewsFormWrapped = withRating(ReviewsForm);

class Reviews extends PureComponent {
  render() {
    const {
      isAuth,
      reviews
    } = this.props;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ReviewsList reviews={reviews} />
        {isAuth && <ReviewsFormWrapped />}
      </section>
    );
  }
}

Reviews.propTypes = {
  isAuth: bool.isRequired,
  reviews: arrayOf(reviewPropTypes)
};

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === AuthStatus.AUTH,
  reviews: getCommentsToShow(state)
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);
