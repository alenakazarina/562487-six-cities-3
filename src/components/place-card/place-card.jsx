import React from 'react';
import PropTypes from 'prop-types';
import PremiumMark from '../premium-mark/premium-mark';
import Rating from '../rating/rating';
import Price from '../price/price';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {offerPropTypes} from '../../types';

const PREFIX = `place-card__`;

const PlaceCard = ({prefix, offer, onTitleClick, onCardMouseOver}) => {
  const {previewImage, title, isFavorite, isPremium, rating, type, price} = offer;
  const classes = (prefix === `cities__`) ?
    `cities__place-card place-card`
    : `near-places__card place-card`;

  return (
    <article className={classes}
      onMouseOver={(evt) => onCardMouseOver(evt.currentTarget, offer)}
    >
      {isPremium ? <PremiumMark prefix={PREFIX} /> : ``}
      <div className={`${prefix}image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image"
            src={previewImage}
            width="260" height="200"
            alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price prefix={PREFIX} price={price} />
          <BookmarkButton
            prefix={PREFIX}
            isFavorite={isFavorite}
            width={18}
            height={19}
          />
        </div>
        <Rating prefix={PREFIX} rating={rating}/>
        <h2 className="place-card__name">
          <a onClick={() => onTitleClick(offer)}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  prefix: PropTypes.string.isRequired,
  offer: offerPropTypes,
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired
};

export default PlaceCard;
