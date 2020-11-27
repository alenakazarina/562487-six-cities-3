import axios from 'axios';
import {ActionCreator as ErrorActionCreator} from './reducers/errors/errors';
import {ActionCreator as UserActionCreator} from './reducers/user/user';
import {BASE_URL, AuthStatus} from './const';

const ErrorStatus = {
  UNAUTHORIZED: 401
};

class API {
  constructor() {
    this._api = axios.create({
      baseURL: BASE_URL,
      timeout: 1000 * 5,
      withCredentials: true
    });
  }

  getAxios() {
    return this._api;
  }

  checkAuth() {
    return this._api.get(`/login`);
  }

  login(authData) {
    return this._api.post(`/login`, authData);
  }

  getHotels() {
    return this._api.get(`/hotels`);
  }

  getNearByHotels(id) {
    return this._api.get(`/hotels/${id}/nearby`);
  }

  getComments(id) {
    return this._api.get(`/comments/${id}`);
  }

  updateComments({id, comment}) {
    return this._api.post(`/comments/${id}`, comment);
  }

  getFavorites() {
    return this._api.get(`/favorite`);
  }

  addFavorite(id) {
    const status = 1;
    return this._api.post(`/favorite/${id}/${status}`, {
      'hotel_id': id,
      'status': status
    });
  }

  removeFavorite(id) {
    const status = 0;
    return this._api.post(`/favorite/${id}/${status}`, {
      'hotel_id': id,
      'status': status
    });
  }

  create(store) {
    const onSuccess = (response) => response;

    const onFail = (err) => {
      const {status} = err.response;
      if (status === ErrorStatus.UNAUTHORIZED) {
        store.dispatch(UserActionCreator.requireAuthorization(AuthStatus.NO_AUTH));
      }
      store.dispatch(ErrorActionCreator.setErrorStatus(status));
      return Promise.reject(err);
    };

    this._api.interceptors.response.use(onSuccess, onFail);
  }
}

export default API;
