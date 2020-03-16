import React, {PureComponent} from 'react';
import {func, number} from 'prop-types';
import {offerPropTypes} from '../../types';

const INITIAL_STATE = {
  ratingValue: 0,
  comment: ``
};

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);
      this.state = INITIAL_STATE;
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.reviewsCount < this.props.reviewsCount) {
        this.setState(INITIAL_STATE);
      }
    }

    _handleChange({currentTarget}) {
      switch (currentTarget.name) {
        case `rating`:
          this.setState({
            ratingValue: parseInt(currentTarget.value, 10)
          });
          return;
        case `review`:
          this.setState({
            comment: currentTarget.value
          });
      }
    }

    _handleSubmit() {
      const {ratingValue, comment} = this.state;
      const {activeOffer, onReviewSubmit} = this.props;
      onReviewSubmit(activeOffer.id, {
        rating: ratingValue,
        text: comment
      });
    }

    render() {
      const {ratingValue, comment} = this.state;
      return (
        <Component
          {...this.props}
          ratingValue={ratingValue}
          comment={comment}
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithRating.propTypes = {
    activeOffer: offerPropTypes,
    onReviewSubmit: func.isRequired,
    reviewsCount: number.isRequired
  };

  return WithRating;
};

export default withRating;
