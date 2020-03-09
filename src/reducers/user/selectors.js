import Namespace from '../namespace';

const NAMESPACE = Namespace.USER;

export const getAuthStatus = (state) => state[NAMESPACE].authStatus;

export const getUser = (state) => state[NAMESPACE].user;
