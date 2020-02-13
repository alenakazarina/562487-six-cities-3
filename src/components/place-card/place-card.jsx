import React from 'react';
import PropTypes from 'prop-types';

const BOOKMARK_CLASS = `place-card__bookmark-button--active`;

const Mark = () => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

const PlaceCard = ({offer, onTitleClick, onCardMouseOver}) => {
  const {previewImage, title, isFavorite, isPremium, rating, type, price} = offer;
  const ratingToWidth = new Array(6).fill(``).map((it, i) => `${i * 20}%`);
  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={(evt) => onCardMouseOver(evt.currentTarget, offer)}
    >
      {isPremium ? <Mark /> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? BOOKMARK_CLASS : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingToWidth[rating]}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onTitleClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired
};

export default PlaceCard;
