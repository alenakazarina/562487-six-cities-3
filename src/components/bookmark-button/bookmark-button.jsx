import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bool, func, number, string} from 'prop-types';
import {getAuthStatus} from '../../reducers/user/selectors';
import {AuthStatus} from '../../reducers/user/user';
import {getFavorites} from '../../reducers/favorites/selectors';
import {AppRoute} from '../../const';
import {Operation as FavoritesOperation} from '../../reducers/favorites/favorites';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';

const BookmarkButton = (props) => {
  const {
    isAuth,
    id,
    isFavorite,
    prefix,
    width,
    height,
    onFavoriteClick
  } = props;

  const favoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

  return isAuth ? (
    <button
      className={`${prefix}__bookmark-button button ${favoriteClass}`}
      type="button"
      onClick={() => onFavoriteClick(id, !isFavorite)}
    >
      <svg className={`place-card__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  ) : (
    <Link className={`${prefix}__bookmark-button button`}
      to={AppRoute.LOGIN}
    >
      <svg className={`place-card__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </Link>
  );
};

BookmarkButton.propTypes = {
  isAuth: bool.isRequired,
  isFavorite: bool.isRequired,
  prefix: string.isRequired,
  id: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  onFavoriteClick: func.isRequired
};

const mapStateToProps = (state, props) => ({
  isAuth: getAuthStatus(state) === AuthStatus.AUTH,
  isFavorite: getFavorites(state).findIndex((offer) => offer.id === props.id) !== -1
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, isFavorite) {
    dispatch(FavoritesOperation.updateFavorites(id, isFavorite));
    dispatch(OffersActionCreator.toggleFavorite(id));
  }
});

export {BookmarkButton};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
