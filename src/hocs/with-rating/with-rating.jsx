import React, {PureComponent} from 'react';

const INITIAL_STATE = {
  ratingValue: 0,
  comment: ``,
  isDisabled: true
};

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);
      this.state = INITIAL_STATE;
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._resetFormInputs = this._resetFormInputs.bind(this);
    }

    componentDidUpdate() {
      this._checkDisabledState();
    }

    _handleRatingChange(evt) {
      this.setState({
        ratingValue: parseInt(evt.currentTarget.value, 10)
      });
    }

    _handleTextChange(evt) {
      this.setState({
        comment: evt.currentTarget.value
      });
    }

    _resetFormInputs() {
      this.setState(INITIAL_STATE);
    }

    _checkDisabledState() {
      const {ratingValue, comment, isDisabled} = this.state;
      if (ratingValue !== 0 && comment.length >= 50 && comment.length <= 300) {
        this.setState({
          isDisabled: false
        });
        return;
      }
      if (isDisabled === false) {
        this.setState({
          isDisabled: true
        });
      }
    }

    render() {
      const {ratingValue, comment, isDisabled} = this.state;
      return (
        <Component
          {...this.props}
          ratingValue={ratingValue}
          comment={comment}
          isDisabled={isDisabled}
          onRatingChange={this._handleRatingChange}
          onTextChange={this._handleTextChange}
          resetFormInputs={this._resetFormInputs}
        />
      );
    }
  }

  return WithRating;
};

export default withRating;
