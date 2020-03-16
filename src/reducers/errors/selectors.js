import Namespace from '../namespace';

const NAMESPACE = Namespace.ERRORS;

export const getErrorStatus = (state) => state[NAMESPACE].errorStatus;
