import React, {PureComponent} from 'react';
import {number} from 'prop-types';

const INITIAL_FORM_STATE = {
  ratingValue: 0,
  comment: ``
};

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);
      this.state = INITIAL_FORM_STATE;
      this._handleChange = this._handleChange.bind(this);
    }

    componentDidUpdate({reviewsCount}) {
      if (reviewsCount < this.props.reviewsCount) {
        this.setState(INITIAL_FORM_STATE);
      }
    }

    _handleChange({currentTarget}) {
      switch (currentTarget.name) {
        case `rating`:
          this.setState({
            ratingValue: parseInt(currentTarget.value, 10)
          });
          break;
        case `review`:
          this.setState({
            comment: currentTarget.value
          });
          break;
      }
    }

    render() {
      const {
        ratingValue,
        comment
      } = this.state;

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
    reviewsCount: number.isRequired
  };

  return WithRating;
};

export default withRating;
