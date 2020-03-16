import React, {PureComponent, createRef} from 'react';
import {connect} from 'react-redux';
import {string, func, bool, number} from 'prop-types';
import {appUserPropTypes} from '../../types';
import {Operation as UserOperation} from '../../reducers/user/user';
import {getActiveCity} from '../../reducers/offers/selectors';
import Header from '../../components/header/header';
import LocationsListItem from '../locations-list-item/locations-list-item';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this._loginRef = createRef();
    this._passRef = createRef();
    this._submitButtonRef = createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const {
      errorStatus
    } = this.props;

    if (errorStatus) {
      this._setInputsDisabled(false);
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._setInputsDisabled(true);
    this.props.login({
      login: this._loginRef.current.value,
      password: this._passRef.current.value
    });
  }

  _setInputsDisabled(status) {
    this._loginRef.current.disabled = status;
    this._passRef.current.disabled = status;
    this._submitButtonRef.current.disabled = status;
  }

  render() {
    const {
      isAuth,
      user,
      activeCity
    } = this.props;

    return (
      <div className="page page--gray page--login">
        <Header
          isAuth={isAuth}
          user={user}
        />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={this._handleSubmit}
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
                <button
                  ref={this._submitButtonRef}
                  className="login__submit form__submit button" type="submit"
                >Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <LocationsListItem
                nodeType="div"
                city={activeCity}
                isActive
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  isAuth: bool.isRequired,
  user: appUserPropTypes,
  activeCity: string.isRequired,
  errorStatus: number.isRequired,
  login: func.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
