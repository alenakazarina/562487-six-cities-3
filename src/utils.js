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

export const getNearOffers = (offers, pageOffer) => {
  return offers.filter((offer) => offer.city.name === pageOffer.city.name && offer.id !== pageOffer.id);
};

export const getFavorites = (offers) => {
  return offers.filter((offer) => offer.isFavorite);
};

export const formatPluralNouns = (count, noun) => {
  return count === 1 ? `${count} ${noun}` : `${count} ${noun}s`;
};

