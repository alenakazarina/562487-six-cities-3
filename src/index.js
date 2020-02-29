import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {reducer} from './reducers/reducer';
import {getOffers} from './mocks/offers';
import {getUniqueCities, getOffersByCity} from './utils';
import {CITIES} from './const';

const INITIAL_CITY = CITIES[0];
const INITIAL_OFFERS = getOffers() || [];
const CITY_OFFERS = INITIAL_OFFERS.length ? getOffersByCity(INITIAL_OFFERS, INITIAL_CITY) : [];
const UNIQUE_CITIES = INITIAL_OFFERS.length ? getUniqueCities(INITIAL_OFFERS) : [];

const store = createStore(
    reducer,
    {
      initialOffers: INITIAL_OFFERS,
      offers: CITY_OFFERS,
      cities: UNIQUE_CITIES,
      activeCity: INITIAL_CITY,
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
