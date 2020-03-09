import React from 'react';
import {connect} from 'react-redux';
import {arrayOf, string, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import {ActionCreator as OfferActionCreator, Operation as OfferOperation} from '../../reducers/offer/offer';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';
import {getActiveOffer} from '../../reducers/offer/selectors';
import {getOffersByCity, getCities, getActiveCity} from '../../reducers/offers/selectors';
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const LocationsListWrapped = withActiveItem(LocationsList, `locations-list`);

const Main = (props) => {
  const {
    offers,
    cities,
    activeCity,
    activeOffer,
    onTitleClick,
    onCardHoverChange,
    onTabClick,
    renderHeader
  } = props;

  const isEmpty = offers.length === 0;

  return (
    <div className="page page--gray page--main">
      {renderHeader()}
      <main className={`page__main page__main--index ${isEmpty ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsListWrapped
          cities={cities}
          activeCity={activeCity}
          onTabClick={onTabClick}
        />
        <Cities
          offers={offers}
          activeCity={activeCity}
          activeOffer={activeOffer}
          onTitleClick={onTitleClick}
          onCardHoverChange={onCardHoverChange}
        />
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  cities: arrayOf(string).isRequired,
  activeCity: string.isRequired,
  activeOffer: offerPropTypes,
  onTitleClick: func.isRequired,
  onCardHoverChange: func.isRequired,
  onTabClick: func.isRequired,
  renderHeader: func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  cities: getCities(state),
  activeCity: getActiveCity(state),
  activeOffer: getActiveOffer(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(pageOffer) {
    dispatch(OfferOperation.loadNearOffers(pageOffer));
    dispatch(OfferOperation.loadComments(pageOffer));
    dispatch(OfferActionCreator.setPageOffer(pageOffer));
    dispatch(OfferActionCreator.setActiveOffer(null));
  },
  onCardHoverChange(activeOffer) {
    dispatch(OfferActionCreator.setActiveOffer(activeOffer));
  },
  onTabClick(activeCity) {
    dispatch(OffersActionCreator.setActiveCity(activeCity));
    dispatch(OffersActionCreator.updateOffers());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

