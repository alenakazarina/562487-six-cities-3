import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createAPI from './api';
import App from './components/app/app';
import reducer from './reducers/reducer';
import {Operation as OffersOperation} from './reducers/offers/offers';
import {Operation as UserOperation, ActionCreator, AuthStatus} from './reducers/user/user';
import {ActionCreator as ErrorActionCreator} from './reducers/errors/errors';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthStatus.NO_AUTH));
};

const onRequestError = (response) => {
  const status = response.status;
  store.dispatch(ErrorActionCreator.setErrorStatus(status));
};

const api = createAPI({onUnauthorized, onRequestError});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(OffersOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
