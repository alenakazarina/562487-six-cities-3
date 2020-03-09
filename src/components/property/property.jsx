import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {arrayOf, func, number} from 'prop-types';
import {offerPropTypes} from '../../types';
import {getOffers} from '../../reducers/offers/selectors';
import {getPageOffer, getNearOffers} from '../../reducers/offer/selectors';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';
import {Operation as FavoritesOperation} from '../../reducers/favorites/favorites';
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
const NEAR_OFFERS_ON_MAP_COUNT = 3;

class Property extends PureComponent {
  componentDidMount() {
    const {id} = this.props;
    const pageOffer = this.props.initialOffers.find((offer) => offer.id === id);
    this.props.onOfferPageLoad(pageOffer);
  }

  render() {
    const {
      pageOffer,
      renderHeader,
      nearOffers
    } = this.props;

    const isLoading = nearOffers.length === 0;

    if (isLoading) {
      return ``;
    }

    const {title, images, isFavorite, isPremium, rating, type, bedrooms, maxAdults, price, amenities, host, description} = pageOffer;

    const nearOffersOnMap = isLoading === false && nearOffers.slice(0, NEAR_OFFERS_ON_MAP_COUNT);

    return (
      <div className="page page--property">
        {renderHeader()}
        <main className="page__main page__main--property">
          <section className="property">
            <Gallery images={images} />
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? <PremiumMark prefix={PREFIX} /> : ``}
                <PropertyTitle title={title}>
                  <BookmarkButton
                    id={pageOffer.id}
                    prefix={PREFIX}
                    isFavorite={isFavorite}
                    width={31}
                    height={33}
                  />
                </PropertyTitle>
                <Rating prefix={PREFIX} rating={rating} isValue />
                <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
                <Price prefix={PREFIX} price={price} />
                <PropertyInside amenities={amenities} />
                <PropertyHost host={host}>
                  <PropertyDescription description={description} />
                </PropertyHost>
                <Reviews />
              </div>
            </div>
            <Map
              prefix={PREFIX}
              offers={[...nearOffersOnMap, pageOffer]}
              activeOffer={pageOffer}
            />
          </section>
          <div className="container">
            <NearPlaces />
          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  id: number.isRequired,
  pageOffer: offerPropTypes,
  initialOffers: arrayOf(offerPropTypes),
  renderHeader: func.isRequired,
  nearOffers: arrayOf(offerPropTypes),
  onFavoriteClick: func.isRequired,
  onOfferPageLoad: func.isRequired
};

const mapStateToProps = (state) => ({
  initialOffers: getOffers(state),
  pageOffer: getPageOffer(state),
  nearOffers: getNearOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, isFavorite) {
    dispatch(FavoritesOperation.updateFavorites(id, isFavorite));
    dispatch(OffersActionCreator.toggleFavorite(id));
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
