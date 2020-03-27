import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {OfferTypes} from '../../types';
import {ActionCreator as OfferActionCreator} from '../../reducers/offer/offer';
import {Operation as FavoritesOperation} from '../../reducers/favorites/favorites';
import PremiumMark from '../premium-mark/premium-mark';
import Rating from '../rating/rating';
import Price from '../price/price';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {OfferType} from '../../const';

import withDisabled from '../../hocs/with-disabled/with-disabled';

const BookmarkButtonWrapped = withDisabled(BookmarkButton);

interface Props {
  prefix: `cities` | `favorites` | `near-places`;
  offer: OfferTypes;
  setActiveOffer: (offer: OfferTypes) => void;
  onFavoriteClick: (id: number, status: boolean) => void;
};

class PlaceCard extends React.Component<Props> {
  props: Props;
  _prefix: `place-card`;

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
      offer,
      onFavoriteClick
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
            <BookmarkButtonWrapped
              id={offer.id}
              prefix={prefix}
              width={18}
              height={19}
              onFavoriteClick={onFavoriteClick}
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

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(offer) {
    if (offer) {
      dispatch(OfferActionCreator.setActiveOffer(offer));
    } else {
      dispatch(OfferActionCreator.resetActiveOffer(offer));
    }
  },
  onFavoriteClick(id, status) {
    if (status) {
      dispatch(FavoritesOperation.addFavorite(id));
    } else {
      dispatch(FavoritesOperation.removeFavorite(id));
    }
  }
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);

