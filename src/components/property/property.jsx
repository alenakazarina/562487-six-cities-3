import React from 'react';
import {arrayOf, func} from 'prop-types';
import Gallery from '../gallery/gallery';
import PremiumMark from '../premium-mark/premium-mark';
import PropertyTitle from '../property-title/property-title';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import Features from '../features/features';
import Price from '../price/price';
import PropertyInside from '../property-inside/property-inside';
import PropertyHost from '../property-host/property-host';
import Reviews from '../reviews/reviews';
import NearPlaces from '../near-places/near-places';
import Map from '../map/map';
import {offerPropTypes} from '../../types';
import PropertyDescription from '../property-description/property-description';

const PREFIX = `property`;

const Property = ({offer, nearOffers, onTitleClick}) => {
  const {title, images, isFavorite, isPremium, rating, features,
    price, amenities, host, description, reviews, city} = offer;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <Gallery images={images} />
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium ? <PremiumMark prefix={PREFIX} /> : ``}
            <PropertyTitle title={title}>
              <BookmarkButton
                prefix={PREFIX}
                isFavorite={isFavorite}
                width={31}
                height={33}
              />
            </PropertyTitle>
            <Rating prefix={PREFIX} rating={rating}>
              <span className="property__rating-value rating__value">{rating}</span>
            </Rating>
            <Features features={features} />
            <Price prefix={PREFIX} price={price} />
            <PropertyInside amenities={amenities} />
            <PropertyHost host={host}>
              <PropertyDescription description={description} />
            </PropertyHost>
            <Reviews reviews={reviews} />
          </div>
        </div>
        <Map city={city} prefix={PREFIX} />
      </section>
      <div className="container">
        <NearPlaces
          offers={nearOffers}
          onTitleClick={onTitleClick}
        />
      </div>
    </main>
  );
};

Property.propTypes = {
  offer: offerPropTypes,
  nearOffers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired
};

export default Property;
