import React from 'react';
import {Link} from 'react-router-dom';
import {string, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import PremiumMark from '../premium-mark/premium-mark';
import Rating from '../rating/rating';
import Price from '../price/price';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {OfferType} from '../../const';

const PREFIX = `place-card`;

const PlaceCard = (props) => {
  const {
    prefix,
    offer,
    onTitleClick,
    onMouseEnter,
    onMouseLeave
  } = props;

  const {previewImage, title, isPremium, rating, type, price} = offer;

  const className = (prefix === `cities`) ?
    `cities__place-card place-card`
    : `${prefix}__card place-card`;

  return (
    <article className={className}
      onMouseEnter={() => onMouseEnter(offer)}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && prefix !== `favorites` ? <PremiumMark prefix={PREFIX} /> : ``}
      <div className={`${prefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
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
            prefix={PREFIX}
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
          prefix={PREFIX}
          rating={rating}
          isValue={false}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} onClick={() => onTitleClick(offer)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{OfferType[type]}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  prefix: string.isRequired,
  offer: offerPropTypes,
  onTitleClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired
};

export default React.memo(PlaceCard);
