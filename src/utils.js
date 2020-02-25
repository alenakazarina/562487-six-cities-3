export const extend = (state, updates) => {
  return Object.assign({}, state, updates);
};

export const getUniqueCities = (offers) => {
  const cities = new Set(offers.map((offer) => offer.city.name));
  return Array.from(cities);
};

export const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};
