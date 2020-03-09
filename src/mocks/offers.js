import {OffersData, UserData, Cities} from './const';
import {
  generateId,
  getImage,
  getRandomBoolean,
  getRandomNumber,
  getRandomFromArray,
  generateImages
} from './utils';

const generateUser = () => {
  return {
    id: generateId(),
    name: getRandomFromArray(UserData.names),
    isPro: getRandomBoolean(),
    avatarUrl: getImage(UserData.avatarUrls)
  };
};

const generateReview = () => {
  return {
    id: generateId(),
    user: generateUser(),
    rating: getRandomNumber({min: 0, max: OffersData.maxRating}),
    comment: UserData.comment,
    date: new Date()
  };
};

const generateReviews = (count = 1) => {
  return new Array(count).fill(``).map(generateReview);
};

const generateOffer = (offerCity) => {
  return {
    id: generateId(),
    previewImage: getImage(OffersData.images),
    title: getRandomFromArray(OffersData.titles),
    images: generateImages(),
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: getRandomNumber({min: 0, max: OffersData.maxRating}) + 0.4,
    features: {
      type: getRandomFromArray(OffersData.types),
      bedrooms: getRandomNumber({min: 1, max: 5}),
      maxAdults: getRandomNumber({min: 1, max: 10})
    },
    price: getRandomNumber({min: 0, max: 1000}),
    amenities: OffersData.amenities,
    host: generateUser(),
    description: OffersData.description,
    reviews: generateReviews(2),
    city: offerCity
  };
};

const generateOffers = (count, city) => {
  return new Array(count).fill(``).map((item, i) => generateOffer({name: city.name, location: city.offersLocations[i]}));
};

export const getOffers = () => Object.values(Cities)
  .map((city) => generateOffers(city.offersLocations.length, city))
  .reduce((accOffers, cityOffers) => accOffers.concat(...cityOffers), []);
