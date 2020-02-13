import {OffersData} from './const';
import {
  generateId,
  getImage,
  getRandomBoolean,
  getRandomNumber,
  getRandomFromArray,
} from './utils';

const generateOffer = () => {
  return {
    id: generateId(),
    previewImage: getImage(OffersData.images),
    title: getRandomFromArray(OffersData.titles),
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: getRandomNumber({min: 0, max: OffersData.maxRating}),
    type: getRandomFromArray(OffersData.types),
    price: getRandomNumber({min: 0, max: 1000})
  };
};

export const generateOffers = (count = 3) => {
  return new Array(count).fill(``).map(generateOffer);
};

export const offers = [
  {
    city: `Paris`,
    offers: generateOffers(4)
  },
  {
    city: `Cologne`,
    offers: generateOffers(5)
  },
  {
    city: `Brussels`,
    offers: generateOffers(4)
  },
  {
    city: `Amsterdam`,
    offers: generateOffers(5)
  },
  {
    city: `Hamburg`,
    offers: generateOffers(4)
  },
  {
    city: `Dusseldorf`,
    offers: generateOffers(5)
  }
];
