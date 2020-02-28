import React, {Component} from 'react';
import {func} from 'prop-types';

const withHover = (WrappedComponent) => {
  class WithHover extends Component {
    constructor(props) {
      super(props);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    shouldComponentUpdate() {
      return false;
    }

    _handleMouseEnter(offer) {
      this.setState({
        isHovered: true
      });
      this.props.onCardHoverChange(offer);
    }

    _handleMouseLeave() {
      this.setState({
        isHovered: false
      });
      this.props.onCardHoverChange(null);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
        />
      );
    }
  }

  WithHover.propTypes = {
    onCardHoverChange: func.isRequired
  };

  return WithHover;
};

export default withHover;
