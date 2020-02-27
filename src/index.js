import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {reducer} from './reducers/reducer';
import {offers} from './mocks/offers';
import {getUniqueCities, getOffersByCity} from './utils';

const store = createStore(
    reducer,
    {
      initialOffers: offers,
      offers: getOffersByCity(offers, offers[0].city.name),
      cities: getUniqueCities(offers),
      activeCity: offers[0].city.name,
      activeOffer: null,
      pageOffer: null
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
