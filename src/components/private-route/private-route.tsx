import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bool, string, func} from 'prop-types';
import {AppRoute} from '../../const';
import {AuthStatus} from '../../reducers/user/user';
import {getAuthStatus} from '../../reducers/user/selectors';

const PrivateRoute = (props) => {
  const {render, path, exact, isAuth} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuth
            ? render()
            : <Redirect to={{
              pathname: AppRoute.LOGIN,
              state: {
                from: routeProps.location
              }
            }}
            />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: bool.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired
};

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === AuthStatus.AUTH,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
