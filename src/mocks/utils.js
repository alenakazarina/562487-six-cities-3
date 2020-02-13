import nanoid from 'nanoid';
import {IMAGE_PATH, OffersData} from './const';

const getRandomNumber = ({min = 0, max = 1}) => {
  return min + Math.floor(max * Math.random());
};

const getRandomFromObject = (obj = {}) => {
  const randomKey = getRandomFromArray(Object.keys(obj));
  return obj[randomKey];
};

const getRandomFromArray = (arr = []) => {
  const randomIndex = getRandomNumber({min: 0, max: arr.length});
  return arr[randomIndex];
};

const getRandomArray = ({items = [], minLength = 0, maxLength = 1}) => {
  const length = getRandomNumber({min: minLength, max: maxLength + 1});
  return new Array(length).fill(``).map(() => {
    const index = getRandomNumber(0, items.length);
    return items[index];
  });
};

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const generateId = () => {
  return nanoid();
};

const getImage = (items = []) => {
  const randomIndex = getRandomNumber({min: 0, max: items.length});
  return IMAGE_PATH.concat(items[randomIndex]);
};

const generateImages = () => {
  return OffersData.images.map((image) => IMAGE_PATH.concat(image));
};

const formatMonthYear = (date = new Date()) => {
  return `${date.getMonth() + 1} ${date.getFullYear()}`;
};

export {
  getRandomNumber,
  getRandomArray,
  getRandomBoolean,
  generateId,
  getImage,
  generateImages,
  getRandomFromArray,
  getRandomFromObject,
  formatMonthYear
};
