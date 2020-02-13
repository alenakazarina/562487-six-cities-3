import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

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
    const {offers, onTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
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
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
