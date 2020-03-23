import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {arrayOf, bool, func, number} from 'prop-types';
import {offerPropTypes, reviewPropTypes, appUserPropTypes} from '../../types';
import {getNearOffersToShow, getCommentsToShow, getCommentsLength} from '../../reducers/offer/selectors';
import {Operation as OfferOperation} from '../../reducers/offer/offer';
import {Operation as FavoritesOperation} from '../../reducers/favorites/favorites';
import Header from '../../components/header/header';
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
import withDisabled from '../../hocs/with-disabled/with-disabled';

const BookmarkButtonWrapped = withDisabled(BookmarkButton);

class Property extends PureComponent {
  constructor(props) {
    super(props);
    this._prefix = `property`;
  }

  componentDidMount() {
    this.props.onOfferPageLoad(this.props.activeOffer);
  }

  componentDidUpdate({activeOffer}) {
    if (!activeOffer || activeOffer !== this.props.activeOffer) {
      this.props.onOfferPageLoad(this.props.activeOffer);
    }
  }

  render() {
    const {
      isAuth,
      user,
      errorStatus,
      activeOffer,
      nearOffers,
      reviews,
      reviewsCount,
      onReviewSubmit,
      onFavoriteClick
    } = this.props;

    if (!activeOffer) {
      return ``;
    }

    const {id, title, images, isPremium, rating, type, bedrooms, maxAdults, price, amenities, host, description} = activeOffer;

    return (
      <>
        <div className="page page--property">
          <Header
            isAuth={isAuth}
            user={user}
          />
          <main className="page__main page__main--property">
            <section className="property">
              <Gallery images={images} />
              <div className="property__container container">
                <div className="property__wrapper">
                  {isPremium ? <PremiumMark prefix={this._prefix} /> : ``}
                  <PropertyTitle title={title}>
                    <BookmarkButtonWrapped
                      id={id}
                      prefix={this._prefix}
                      width={31}
                      height={33}
                      onFavoriteClick={onFavoriteClick}
                    />
                  </PropertyTitle>
                  <Rating
                    prefix={this._prefix}
                    rating={rating}
                    isValue
                  />
                  <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
                  <Price prefix={this._prefix} price={price} />
                  <PropertyInside amenities={amenities} />
                  <PropertyHost host={host}>
                    <PropertyDescription description={description} />
                  </PropertyHost>
                  <Reviews
                    isAuth={isAuth}
                    activeOffer={activeOffer}
                    reviews={reviews}
                    reviewsCount={reviewsCount}
                    onReviewSubmit={onReviewSubmit}
                    errorStatus={errorStatus}
                  />
                </div>
              </div>
              {nearOffers.length ? <Map
                prefix={this._prefix}
                offers={[...nearOffers, activeOffer]}
                activeOffer={activeOffer}
              /> : ``}
            </section>
            <div className="container">
              <NearPlaces nearOffers={nearOffers} />
            </div>
          </main>
        </div>
      </>
    );
  }
}

Property.propTypes = {
  isAuth: bool.isRequired,
  user: appUserPropTypes,
  errorStatus: number.isRequired,
  activeOffer: offerPropTypes,
  nearOffers: arrayOf(offerPropTypes),
  reviews: arrayOf(reviewPropTypes),
  reviewsCount: number.isRequired,
  onReviewSubmit: func.isRequired,
  onOfferPageLoad: func.isRequired,
  onFavoriteClick: func.isRequired
};

const mapStateToProps = (state) => ({
  nearOffers: getNearOffersToShow(state),
  reviews: getCommentsToShow(state),
  reviewsCount: getCommentsLength(state)
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, comment) {
    dispatch(OfferOperation.updateComments(id, comment));
  },
  onFavoriteClick(id, status) {
    if (status) {
      dispatch(FavoritesOperation.addFavorite(id));
    } else {
      dispatch(FavoritesOperation.removeFavorite(id));
    }
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
