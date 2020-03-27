import * as React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import {AuthStatus} from '../../reducers/user/user';
import {getAuthStatus} from '../../reducers/user/selectors';

type Props = RouteProps & {
  isAuth: boolean;
  render: () => React.ReactNode;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === AuthStatus.AUTH,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
