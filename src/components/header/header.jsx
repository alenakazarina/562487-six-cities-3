import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bool, object} from 'prop-types';
import {appUserPropTypes} from '../../types';
import {BASE_URL, AppRoute} from '../../const';
import {getUser, getAuthStatus} from '../../reducers/user/selectors';
import {AuthStatus} from '../../reducers/user/user';

const Header = (props) => {
  const {
    isAuth,
    user,
    location
  } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuth ?
                  <Link className="header__nav-link header__nav-link--profile"
                    to={{
                      pathname: AppRoute.FAVORITES,
                      state: {
                        from: location.pathname
                      }
                    }}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={{backgroundImage: `url(${BASE_URL}${user.avatarUrl})`}}
                    />
                    <span className="header__user-name user__name">{user.email}</span>
                  </Link> :
                  <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"/>
                    <span className="header__user-name user__name">Sign in</span>
                  </Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: bool.isRequired,
  user: appUserPropTypes,
  location: object.isRequired
};

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === AuthStatus.AUTH,
  user: getUser(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
