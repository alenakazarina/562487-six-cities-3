import {combineReducers} from 'redux';
import {reducer as favorites} from './favorites/favorites';
import {reducer as offer} from './offer/offer';
import {reducer as offers} from './offers/offers';
import {reducer as user} from './user/user';
import Namespace from './namespace';

export default combineReducers({
  [Namespace.FAVORITES]: favorites,
  [Namespace.OFFER]: offer,
  [Namespace.OFFERS]: offers,
  [Namespace.USER]: user
});
