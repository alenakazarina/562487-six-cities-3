import React, {PureComponent} from 'react';
import {func, string} from 'prop-types';
import {offerPropTypes} from '../../types';

const withActiveItem = (Component, type) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null
      };
      switch (type) {
        case `locations-list`:
          this._handleTabClick = this._handleTabClick.bind(this);
          return;
        case `places-list`:
          this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
          this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
          return;
      }
    }

    _handleTabClick(activeCity) {
      this.props.onTabClick(activeCity);
    }

    _handleCardMouseEnter(targetCard, offer) {
      targetCard.addEventListener(`mouseleave`, this._handleCardMouseLeave);
      this.setState(() => ({
        activeItem: targetCard
      }));
      this.props.onCardMouseEnter(offer);
    }

    _handleCardMouseLeave() {
      if (this.state.activeItem) {
        this.state.activeItem.removeEventListener(`mouseleave`, this._handleCardMouseLeave);
        this.setState(() => ({
          activeItem: null
        }));
        this.props.onCardMouseLeave(null);
      }
    }

    render() {
      switch (type) {
        case `locations-list`:
          return (
            <Component
              {...this.props}
              onTabClick={this._handleTabClick}
            />
          );
        case `places-list`:
          return (
            <Component
              {...this.props}
              onCardMouseEnter={this._handleCardMouseEnter}
            />
          );
      }
      return null;
    }
  }

  WithActiveItem.propTypes = {
    activeCity: string,
    activeOffer: offerPropTypes,
    onTabClick: func,
    onCardMouseEnter: func,
    onCardMouseLeave: func
  };

  return WithActiveItem;
};

export default withActiveItem;
