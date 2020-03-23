import React from 'react';
import {string, func, bool, number} from 'prop-types';
import {appUserPropTypes} from '../../types';
import Header from '../../components/header/header';
import LocationsListItem from '../locations-list-item/locations-list-item';
import LoginForm from '../login-form/login-form';
import withLogin from '../../hocs/with-login/with-login';
import withDisabled from '../../hocs/with-disabled/with-disabled';

const LoginFormWrapped = withDisabled(withLogin(LoginForm));

const Login = (props) => {
  const {
    isAuth,
    user,
    activeCity,
    errorStatus,
    login
  } = props;

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
            <LoginFormWrapped
              errorStatus={errorStatus}
              login={login}
            />
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
};

Login.propTypes = {
  isAuth: bool.isRequired,
  user: appUserPropTypes,
  activeCity: string.isRequired,
  errorStatus: number.isRequired,
  login: func.isRequired
};

export default React.memo(Login);
