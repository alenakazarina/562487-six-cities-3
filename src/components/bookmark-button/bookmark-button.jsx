import React, {PureComponent, createRef} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bool, func, number, string} from 'prop-types';
import {getAuthStatus} from '../../reducers/user/selectors';
import {AuthStatus} from '../../reducers/user/user';
import {getFavorites} from '../../reducers/favorites/selectors';
import {AppRoute} from '../../const';
import {Operation as FavoritesOperation} from '../../reducers/favorites/favorites';

class BookmarkButton extends PureComponent {
  constructor(props) {
    super(props);
    this._buttonRef = createRef();
    this._handleFavorite = this._handleFavorite.bind(this);
  }

  componentDidUpdate() {
    this._buttonRef.current.disabled = false;
  }

  _handleFavorite() {
    const {id, isFavorite, onFavoriteClick} = this.props;
    this._buttonRef.current.disabled = true;
    const status = isFavorite ? false : true;
    onFavoriteClick(id, status);
  }

  render() {
    const {
      isAuth,
      isFavorite,
      prefix,
      width,
      height
    } = this.props;

    const favoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

    return isAuth ? (
      <button
        ref={this._buttonRef}
        className={`${prefix}__bookmark-button button ${favoriteClass}`}
        type="button"
        onClick={this._handleFavorite}
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
      <Link to={AppRoute.LOGIN} className={`${prefix}__bookmark-button button`}>
        <svg className={`place-card__bookmark-icon`}
          width={width}
          height={height}
        >
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </Link>
    );
  }
}

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
  onFavoriteClick(id, status) {
    if (status) {
      dispatch(FavoritesOperation.addFavorite(id));
    } else {
      dispatch(FavoritesOperation.removeFavorite(id));
    }
  }
});

export {BookmarkButton};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
