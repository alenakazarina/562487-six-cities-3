import React from 'react';
import {arrayOf, func} from 'prop-types';
import Header from '../header/header';
import PremiumMark from '../premium-mark/premium-mark';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import Features from '../features/features';
import Price from '../price/price';
import User from '../user/user';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import PlacesList from '../places-list/places-list';
import {offerPropTypes} from '../../types';

const PREFIX = `property__`;

const Property = ({offer, nearOffers, onTitleClick}) => {
  const {title, images, isFavorite, isPremium, rating, features,
    price, amenities, host, description, reviews, city} = offer;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => (
                <div key={index} className={`property__image-wrapper`}>
                  <img className={`property__image`} src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <PremiumMark prefix={PREFIX} /> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <BookmarkButton
                  prefix={PREFIX}
                  isFavorite={isFavorite}
                  width={31}
                  height={33}
                />
              </div>
              <Rating prefix={PREFIX} rating={rating}>
                <span className="property__rating-value rating__value">{rating}</span>
              </Rating>
              <Features features={features} />
              <Price prefix={PREFIX} price={price} />
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {amenities.map((amenity, index) => (
                    <li key={index} className="property__inside-item">{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <User prefix={`${PREFIX}host-`} user={host} />
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <Review key={review.id} review={review}/>
                  ))}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map" name={city.name} location={city.location}></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              prefix={`near-places__`}
              offers={nearOffers}
              onTitleClick={onTitleClick}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  offer: offerPropTypes,
  nearOffers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired
};

export default Property;
