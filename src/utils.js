import {MONTHS} from './const';

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

export const formatPluralNouns = (count, noun) => {
  return count === 1 ? `${count} ${noun}` : `${count} ${noun}s`;
};

const withLeadingZero = (value) => parseInt(value, 10) > 9 ? `${value}` : `0${value}`;

export const formatDatetime = (date) => {
  const year = date.getFullYear();
  const month = withLeadingZero(date.getMonth() + 1);
  const day = withLeadingZero(date.getDate());
  const hours = withLeadingZero(date.getHours());
  const minutes = withLeadingZero(date.getMinutes());
  return `${year}:${month}:${day}T${hours}:${minutes}`;
};

export const formatMonthYear = (date) => {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export const capitalizeFirstLetter = (name) => `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
