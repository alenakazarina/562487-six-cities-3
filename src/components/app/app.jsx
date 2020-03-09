import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {arrayOf, string, bool, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import {getOffers} from '../../reducers/offers/selectors';
import {AuthStatus} from '../../reducers/user/user';
import {getAuthStatus} from '../../reducers/user/selectors';
import {Operation as OfferOperation, ActionCreator as OfferActionCreator} from '../../reducers/offer/offer';
import {getFavorites} from '../../reducers/favorites/selectors';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import Main from '../main/main';
import PrivateRoute from '../private-route/private-route';
import withHeader from '../../hocs/with-header/with-header';
import {AppRoute} from '../../const';

const MainWrapped = withHeader(Main);
const PropertyWrapped = withHeader(Property);
const FavoritesWrapped = withHeader(Favorites);
const LoginWrapped = withRouter(withHeader(Login));

const App = (props) => {
  const {
    initialOffers,
    authStatus,
    areFavoritesEmpty,
    onOfferPageLoad
  } = props;

  if (initialOffers.length === 0) {
    return ``;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={() => (
            <MainWrapped />
          )}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => (
            authStatus === AuthStatus.NO_AUTH ?
              <LoginWrapped /> :
              <Redirect to={AppRoute.ROOT} />
          )}
        />
        <Route
          exact
          path={AppRoute.OFFER}
          render={(routeProps) => {
            const id = parseInt(routeProps.match.params.id, 10);
            return (
              <PropertyWrapped
                id={id}
                onOfferPageLoad={onOfferPageLoad}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => (
            <FavoritesWrapped isEmpty={areFavoritesEmpty} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authStatus: string.isRequired,
  initialOffers: arrayOf(offerPropTypes).isRequired,
  areFavoritesEmpty: bool.isRequired,
  onOfferPageLoad: func.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  initialOffers: getOffers(state),
  areFavoritesEmpty: getFavorites(state).length === 0
});

const mapDispatchToProps = (dispatch) => ({
  onOfferPageLoad(pageOffer) {
    dispatch(OfferOperation.loadNearOffers(pageOffer));
    dispatch(OfferOperation.loadComments(pageOffer));
    dispatch(OfferActionCreator.setPageOffer(pageOffer));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
