import axios from 'axios';
import {BASE_URL} from './const';

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = ({onUnauthorized, onRequestError}) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized(response);
      throw err;
    }

    onRequestError(response);
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
