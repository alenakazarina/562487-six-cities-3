export const BASE_URL = `https://htmlacademy-react-3.appspot.com/six-cities`;

export const SortType = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const OfferType = {
  house: `House`,
  room: `Private room`,
  apartment: `Apartment`,
  hotel: `Hotel`
};

export const AppRoute = {
  ROOT: `/`,
  OFFER: `/offer/:id`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`
};

export const RATINGS = [
  {
    value: 5,
    title: `perfect`
  },
  {
    value: 4,
    title: `good`
  },
  {
    value: 3,
    title: `not bad`
  },
  {
    value: 2,
    title: `badly`
  },
  {
    value: 1,
    title: `terribly`
  }
];

export const MONTHS = [
  `January`, `February`, `March`, `April`,
  `May`, `June`, `July`, `August`,
  `September`, `October`, `November`, `December`
];

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const InitialState = {
  USER: {
    authStatus: `NO_AUTH`,
    user: {
      id: -1,
      email: ``,
      name: ``,
      isPro: false,
      avatarUrl: ``
    }
  },
  FAVORITES: {
    favorites: []
  },
  OFFER: {
    activeOffer: null,
    nearOffers: [],
    comments: []
  },
  OFFERS: {
    offers: [],
    activeCity: ``
  },
  ERRORS: {
    errorStatus: null
  }
};

