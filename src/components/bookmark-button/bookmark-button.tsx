import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../reducers/user/selectors';
import {getErrorStatus} from '../../reducers/errors/selectors';
import {checkFavorite} from '../../reducers/favorites/selectors';
import {AppRoute, AuthStatus} from '../../const';

interface Props {
  isAuth: boolean;
  isFavorite: boolean;
  prefix: `property` | `place-card`;
  id: number;
  width: number;
  height: number;
  errorStatus: number;
  isDisabled: boolean;
  setDisabled: (status: boolean) => void;
  onFavoriteClick: (id: number, status: boolean) => void;
}

class BookmarkButton extends React.PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this._handleFavorite = this._handleFavorite.bind(this);
  }

  componentDidUpdate({errorStatus, isFavorite}) {
    if (errorStatus || isFavorite !== this.props.isFavorite) {
      this.props.setDisabled(false);
    }
  }

  _handleFavorite() {
    const {id, isFavorite, onFavoriteClick} = this.props;
    this.props.setDisabled(true);
    const status = isFavorite ? false : true;
    onFavoriteClick(id, status);
  }

  render() {
    const {
      isAuth,
      isFavorite,
      prefix,
      width,
      height,
      isDisabled
    } = this.props;

    const favoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

    return isAuth ? (
      <button
        disabled={isDisabled}
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

const mapStateToProps = (state, props) => ({
  isAuth: getAuthStatus(state) === AuthStatus.AUTH,
  isFavorite: checkFavorite(state, props.id),
  errorStatus: getErrorStatus(state)
});

export {BookmarkButton};
export default connect(mapStateToProps)(BookmarkButton);
