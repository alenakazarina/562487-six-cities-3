import React from 'react';
import {connect} from 'react-redux';
import {array, func, arrayOf, string} from 'prop-types';
import {ActionCreator as OfferActionCreator, Operation as OfferOperation} from '../../reducers/offer/offer';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';
import {Operation as FavoritesOperation} from '../../reducers/favorites/favorites';
import {getFavorites, getFavoritesLocations} from '../../reducers/favorites/selectors';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';
import {getOffersByCity} from '../../utils';

const FavoritesList = (props) => {
  const {
    favorites,
    favoritesLocations,
    onTitleClick,
    onFavoriteClick,
    onTabClick
  } = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesLocations.map((location, i) => (
          <FavoritesListItem
            key={location}
            city={location}
            offers={getOffersByCity(favorites, favoritesLocations[i])}
            onTitleClick={onTitleClick}
            onFavoriteClick={onFavoriteClick}
            onTabClick={onTabClick}
          />
        ))}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favorites: array.isRequired,
  favoritesLocations: arrayOf(string).isRequired,
  onTitleClick: func.isRequired,
  onFavoriteClick: func.isRequired,
  onTabClick: func.isRequired
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  favoritesLocations: getFavoritesLocations(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(pageOffer) {
    dispatch(OfferOperation.loadNearOffers(pageOffer));
    dispatch(OfferOperation.loadComments(pageOffer));
    dispatch(OfferActionCreator.setPageOffer(pageOffer));
    dispatch(OfferActionCreator.setActiveOffer(null));
  },
  onFavoriteClick(id, isFavorite) {
    dispatch(FavoritesOperation.updateFavorites(id, isFavorite));
    dispatch(OffersActionCreator.toggleFavorite(id));
  },
  onTabClick(activeCity) {
    dispatch(OffersActionCreator.setActiveCity(activeCity));
    dispatch(OffersActionCreator.updateOffers());
  },
});

export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
