import React, {PureComponent} from 'react';

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: null,
        activeOffer: null
      };
      this._handleCardMouseOver = this._handleCardMouseOver.bind(this);
      this._handleCardMouseOut = this._handleCardMouseOut.bind(this);
    }

    _handleCardMouseOver(targetCard, offer) {
      targetCard.addEventListener(`mouseout`, this._handleCardMouseOut);
      this.setState(() => ({
        activeCard: targetCard,
        activeOffer: offer
      }));
    }

    _handleCardMouseOut() {
      this.state.activeCard.removeEventListener(`mouseout`, this._onCardMouseOut);
      this.setState(() => ({
        activeCard: null,
        activeOffer: null
      }));
    }

    render() {
      const {activeOffer} = this.state;
      return (
        <Component
          {...this.props}
          activeOffer={activeOffer}
          onCardMouseOver={this._handleCardMouseOver}
        />
      );
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
