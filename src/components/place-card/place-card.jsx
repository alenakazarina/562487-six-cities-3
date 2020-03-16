import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {string, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import {ActionCreator as OfferActionCreator} from '../../reducers/offer/offer';
import PremiumMark from '../premium-mark/premium-mark';
import Rating from '../rating/rating';
import Price from '../price/price';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {OfferType} from '../../const';

class PlaceCard extends Component {
  constructor(props) {
    super(props);
    this._prefix = `place-card`;
    this._handleActiveChange = this._handleActiveChange.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  _handleActiveChange({type}) {
    const {prefix, offer, setActiveOffer} = this.props;

    if (prefix === `cities`) {
      switch (type) {
        case `mouseenter`:
          setActiveOffer(offer);
          return;
        case `mouseleave`:
          setActiveOffer(null);
          return;
      }
    }
  }

  render() {
    const {
      prefix,
      offer
    } = this.props;

    const {previewImage, title, isPremium, rating, type, price} = offer;

    const className = (prefix === `cities`) ?
      `cities__place-card place-card`
      : `${prefix}__card place-card`;

    return (
      <article className={className}
        onMouseEnter={this._handleActiveChange}
        onMouseLeave={this._handleActiveChange}
      >
        {isPremium && prefix !== `favorites` ? <PremiumMark prefix={this._prefix} /> : ``}
        <div className={`${prefix}__image-wrapper place-card__image-wrapper`}>
          <a>
            <img className="place-card__image"
              src={previewImage}
              width={prefix === `favorites` ? 150 : 260}
              height={prefix === `favorites` ? 110 : 200}
              alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <Price
              prefix={this._prefix}
              price={price}
            />
            <BookmarkButton
              id={offer.id}
              prefix={prefix}
              width={18}
              height={19}
            />
          </div>
          <Rating
            prefix={this._prefix}
            rating={rating}
            isValue={false}
          />
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{title}</Link>
          </h2>
          <p className="place-card__type">{OfferType[type]}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  prefix: string.isRequired,
  offer: offerPropTypes,
  setActiveOffer: func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(offer) {
    if (offer) {
      dispatch(OfferActionCreator.setActiveOffer(offer));
    } else {
      dispatch(OfferActionCreator.resetActiveOffer(offer));
    }
  }
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);

