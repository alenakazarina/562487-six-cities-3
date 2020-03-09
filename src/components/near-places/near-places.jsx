import React from 'react';
import {connect} from 'react-redux';
import {arrayOf, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import PlacesList from '../places-list/places-list';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getNearOffers} from '../../reducers/offer/selectors';
import {Operation as OfferOperation, ActionCreator as OfferActionCreator} from '../../reducers/offer/offer';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';
import {Operation as FavoritesOperation} from '../../reducers/favorites/favorites';

const PlacesListWrapped = withActiveItem(PlacesList, `places-list`);

const NearPlaces = (props) => {
  const {
    nearOffers,
    onTitleClick,
    onFavoriteClick
  } = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlacesListWrapped
        prefix={`near-places`}
        offers={nearOffers}
        onTitleClick={onTitleClick}
        onCardHoverChange={()=>{}}
        onFavoriteClick={onFavoriteClick}
      />
    </section>
  );
};

NearPlaces.propTypes = {
  nearOffers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired,
  onFavoriteClick: func.isRequired
};

const mapStateToProps = (state) => ({
  nearOffers: getNearOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(pageOffer) {
    dispatch(OfferOperation.loadNearOffers(pageOffer));
    dispatch(OfferOperation.loadComments(pageOffer));
    dispatch(OfferActionCreator.setPageOffer(pageOffer));
  },
  onFavoriteClick(id, isFavorite) {
    dispatch(FavoritesOperation.updateFavorites(id, isFavorite));
    dispatch(OffersActionCreator.toggleFavorite(id));
  }
});

export {NearPlaces};
export default connect(mapStateToProps, mapDispatchToProps)(NearPlaces);
