import React, {PureComponent} from 'react';
import {string, bool} from 'prop-types';
import {offerPropTypes} from '../../types';

const withActiveItem = (Component, type) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      switch (type) {
        case `locations-list`:
          this.state = {
            activeItem: this.props.activeCity
          };
          return;
        case `places-list`:
          this.state = {
            activeItem: this.props.isHovered ? this.props.offer : null
          };
          return;
      }
    }

    componentDidUpdate() {
      switch (type) {
        case `locations-list`:
          this.setState = ({
            activeItem: this.props.activeCity
          });
          return;
        case `places-list`:
          this.setState = ({
            activeItem: this.props.isHovered ? this.props.offer : null
          });
          return;
      }
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    activeCity: string,
    offer: offerPropTypes,
    isHovered: bool
  };

  return WithActiveItem;
};

export default withActiveItem;
