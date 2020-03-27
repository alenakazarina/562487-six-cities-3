import * as React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppUser, OfferTypes, AuthData} from '../../types';
import {getOffers} from '../../reducers/offers/selectors';
import {getAuthStatus, getUser} from '../../reducers/user/selectors';
import {getErrorStatus} from '../../reducers/errors/selectors';
import {getActiveCity} from '../../reducers/offers/selectors';
import {Operation as UserOperation, AuthStatus} from '../../reducers/user/user';
import {ActionCreator as ErrorActionCreator} from '../../reducers/errors/errors';
import {Operation as OfferOperation} from '../../reducers/offer/offer';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';
import withMessage from '../../hocs/with-message/with-message';

interface Props {
  isAuth: boolean;
  user: AppUser;
  initialOffers: OfferTypes[];
  activeCity: string;
  errorStatus: number;
  resetError: () => void;
  login: (authData: AuthData) => void;
  onOfferPageLoad: (offer: OfferTypes) => void;
}

const LoginWrapped = withMessage(Login);
const MainWrapped = withMessage(Main);
const PropertyWrapped = withMessage(Property);
const FavoritesWrapped = withMessage(Favorites);

const App: React.FC<Props> = (props: Props) => {
  const {
    initialOffers,
    isAuth,
    user,
    errorStatus,
    activeCity,
    resetError,
    login,
    onOfferPageLoad
  } = props;

  if (initialOffers.length === 0) {
    return <></>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={() => (
            <MainWrapped
              isAuth={isAuth}
              user={user}
              errorStatus={errorStatus}
              resetError={resetError}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => (
            isAuth ?
              <Redirect to={AppRoute.ROOT} /> :
              <LoginWrapped
                isAuth={isAuth}
                user={user}
                activeCity={activeCity}
                errorStatus={errorStatus}
                resetError={resetError}
                login={login}
              />
          )}
        />
        <Route
          exact
          path={AppRoute.OFFER}
          render={(routeProps) => {
            const id = parseInt(routeProps.match.params.id, 10);
            const initialActiveOffer = initialOffers.find((offer) => offer.id === id);

            return (
              <PropertyWrapped
                isAuth={isAuth}
                user={user}
                errorStatus={errorStatus}
                activeOffer={initialActiveOffer}
                resetError={resetError}
                onOfferPageLoad={onOfferPageLoad}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => (
            <FavoritesWrapped
              isAuth={isAuth}
              user={user}
              errorStatus={errorStatus}
              resetError={resetError}
            />
          )}
        />
        <Route
          render={() => {
            return (
              <NotFound
                isAuth={isAuth}
                user={user}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === AuthStatus.AUTH,
  user: getUser(state),
  initialOffers: getOffers(state),
  errorStatus: getErrorStatus(state),
  activeCity: getActiveCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetError() {
    dispatch(ErrorActionCreator.resetError());
  },
  onOfferPageLoad(offer) {
    dispatch(OfferOperation.loadOfferPage(offer));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
