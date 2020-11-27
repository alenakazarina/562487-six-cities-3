import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createAPI from './api';
import App from './components/app/app';
import reducer from './reducers/reducer';
import {Operation as OffersOperation} from './reducers/offers/offers';
import {Operation as UserOperation, ActionCreator, AuthStatus} from './reducers/user/user';
import {ActionCreator as ErrorActionCreator} from './reducers/errors/errors';
import withMessage from './hocs/with-message/with-message';

const AppWrapped = withMessage(App);

const onUnauthorized = (response) => {
  const status = response.status;
  store.dispatch(ActionCreator.requireAuthorization(AuthStatus.NO_AUTH));
  store.dispatch(ErrorActionCreator.setErrorStatus(status));
};

const onRequestError = (response) => {
  const status = response.status;
  store.dispatch(ErrorActionCreator.setErrorStatus(status));
};

const api = createAPI({onUnauthorized, onRequestError});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(OffersOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped />
    </Provider>,
    document.querySelector(`#root`)
);