import React, {PureComponent, createRef} from 'react';
import {connect} from 'react-redux';
import {string, func, object} from 'prop-types';
import {Operation as UserOperation} from '../../reducers/user/user';
import {getAuthStatus, getUser} from '../../reducers/user/selectors';
import {getActiveCity} from '../../reducers/offers/selectors';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';
import LocationsListItem from '../locations-list-item/locations-list-item';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this._loginRef = createRef();
    this._passRef = createRef();
  }

  render() {
    const {
      activeCity,
      login,
      renderHeader,
      onTabClick
    } = this.props;

    return (
      <div className="page page--gray page--login">
        {renderHeader()}
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={(evt) => {
                  evt.preventDefault();
                  login({
                    login: this._loginRef.current.value,
                    password: this._passRef.current.value
                  });
                  this.props.history.goBack(1);
                }}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={this._loginRef}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    ref={this._passRef}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <LocationsListItem
                nodeType="div"
                city={activeCity}
                isActive
                onTabClick={onTabClick}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  activeCity: string.isRequired,
  login: func.isRequired,
  renderHeader: func.isRequired,
  history: object,
  onTabClick: func.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  user: getUser(state),
  activeCity: getActiveCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onTabClick() {
    dispatch(OffersActionCreator.updateOffers());
  },
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
