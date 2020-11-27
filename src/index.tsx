import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import API from './api';
import App from './components/app/app';
import reducer from './reducers/reducer';
import {Operation as OffersOperation} from './reducers/offers/offers';
import {Operation as UserOperation} from './reducers/user/user';
import {InitialState} from './const';

const api = new API();

const store = createStore(
    reducer,
    InitialState,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

api.create(store);

store.dispatch(OffersOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
