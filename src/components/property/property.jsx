import React from 'react';
import {arrayOf, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import Gallery from '../gallery/gallery';
import PremiumMark from '../premium-mark/premium-mark';
import PropertyTitle from '../property-title/property-title';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import Features from '../features/features';
import Price from '../price/price';
import PropertyInside from '../property-inside/property-inside';
import PropertyHost from '../property-host/property-host';
import PropertyDescription from '../property-description/property-description';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';

const PREFIX = `property`;

const Property = (props) => {
  const {
    pageOffer,
    activeOffer,
    nearOffers,
    onTitleClick,
    onCardMouseEnter,
    onCardMouseLeave
  } = props;

  const {title, images, isFavorite, isPremium, rating, features,
    price, amenities, host, description, reviews} = pageOffer;

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
            <Rating prefix={PREFIX} rating={rating} isValue />
            <Features features={features} />
            <Price prefix={PREFIX} price={price} />
            <PropertyInside amenities={amenities} />
            <PropertyHost host={host}>
              <PropertyDescription description={description} />
            </PropertyHost>
            <Reviews reviews={reviews} />
          </div>
        </div>
        <Map
          prefix={PREFIX}
          offers={nearOffers}
          activeOffer={activeOffer}
        />
      </section>
      <div className="container">
        <NearPlaces
          nearOffers={nearOffers}
          onTitleClick={onTitleClick}
          onCardMouseEnter={onCardMouseEnter}
          onCardMouseLeave={onCardMouseLeave}
        />
      </div>
    </main>
  );
};

Property.propTypes = {
  pageOffer: offerPropTypes,
  activeOffer: offerPropTypes,
  nearOffers: arrayOf(offerPropTypes),
  onTitleClick: func.isRequired,
  onCardMouseEnter: func.isRequired,
  onCardMouseLeave: func.isRequired
};

export default Property;
