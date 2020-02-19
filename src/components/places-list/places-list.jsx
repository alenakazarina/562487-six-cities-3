import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerPropTypes} from '../../types';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
      activeOffer: {}
    };
    this._handleCardMouseOver = this._handleCardMouseOver.bind(this);
    this._onCardMouseOut = this._onCardMouseOut.bind(this);
  }

  _handleCardMouseOver(targetCard, offer) {
    targetCard.addEventListener(`mouseout`, this._onCardMouseOut);
    this.setState(() => ({
      activeCard: targetCard,
      activeOffer: offer
    }));
  }

  _onCardMouseOut() {
    this.state.activeCard.removeEventListener(`mouseout`, this._onCardMouseOut);
    this.setState(() => ({
      activeCard: null,
      activeOffer: {}
    }));
  }

  render() {
    const {prefix, offers, onTitleClick} = this.props;
    const className = (prefix === `cities`) ?
      `cities__places-list places__list tabs__content`
      : `near-places__list places__list`;
    return (
      <div className={className}>
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            prefix={prefix}
            offer={offer}
            onTitleClick={onTitleClick}
            onCardMouseOver={this._handleCardMouseOver}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  prefix: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
