export const LOGIN = `keks@gmail.com`;
export const PASSWORD = `SecretCatPass`;

export const TITLES = [
  `Amazing and Extremely Central Flat`,
  `The house among olive`,
  `Nice, cozy, warm big bed apartment`
];

export const IMAGES = [`image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `image7`];

export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const LOCATIONS = [
  {
    name: `Paris`,
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 13
    }
  },
  {
    name: `Dusseldorf`,
    location: {
      latitude: 2,
      longitude: 2,
      zoom: 13
    }
  }
];

export const OFFER_TYPES = [`apartment`, `room`, `house`, `hotel`];

export const GOODS = [`Breakfast`, `Laptop friendly workspace`, `Washer`];

export const SENTENCES = [
  `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
  `In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`
];

export const USERS = [
  {
    avatarUrl: `/user1_avatar`,
    id: 1,
    isPro: true,
    name: `Alena`
  },
  {
    avatarUrl: `/user2_avatar`,
    id: 1,
    isPro: true,
    name: `Nick`
  }
];

export const APP_USERS = USERS.map((user) => Object.assign({}, user, {email: `user@gmail.com`}));

export const DEFAULT_USER = {
  id: -1,
  email: ``,
  name: ``,
  isPro: false,
  avatarUrl: ``
};

export const DATES = [
  new Date(`2020.03.04 14:00`),
  new Date(`2020.03.03 10:00`)
];

export const REVIEWS = [{
  id: 1,
  user: USERS[0],
  rating: 4,
  comment: SENTENCES[0],
  date: DATES[0]
}, {
  id: 2,
  user: USERS[1],
  rating: 5,
  comment: SENTENCES[1],
  date: DATES[1]
}];

export const CITY_OFFERS = [{
  id: 1,
  city: LOCATIONS[0],
  previewImage: IMAGES[0],
  images: IMAGES,
  title: TITLES[0],
  isFavorite: true,
  isPremium: true,
  rating: 5,
  type: OFFER_TYPES[0],
  bedrooms: 3,
  maxAdults: 5,
  price: 400,
  amenities: GOODS,
  host: USERS[0],
  description: SENTENCES[0],
  location: LOCATIONS[0].location
}, {
  id: 2,
  city: LOCATIONS[1],
  previewImage: IMAGES[2],
  images: IMAGES,
  title: TITLES[1],
  isFavorite: false,
  isPremium: false,
  rating: 4,
  type: OFFER_TYPES[2],
  bedrooms: 1,
  maxAdults: 7,
  price: 500,
  amenities: GOODS,
  host: USERS[1],
  description: SENTENCES[1],
  location: LOCATIONS[1].location
}, {
  id: 3,
  city: LOCATIONS[1],
  previewImage: IMAGES[2],
  images: IMAGES,
  title: TITLES[0],
  isFavorite: false,
  isPremium: true,
  rating: 3,
  type: OFFER_TYPES[1],
  bedrooms: 2,
  maxAdults: 2,
  price: 600,
  amenities: GOODS,
  host: USERS[0],
  description: SENTENCES[0],
  location: LOCATIONS[1].location
}];

export const FAVORITE_OFFERS = CITY_OFFERS.map((offer) => Object.assign({}, offer, {isFavorite: true}));

export const API_MOCK_OFFERS = [{
  'bedrooms': 3,
  'city': LOCATIONS[1],
  'description': SENTENCES[1],
  'goods': GOODS,
  'host': {
    'avatar_url': `avatar`,
    'id': 1,
    'is_pro': true,
    'name': `Alena`
  },
  'id': 1,
  'images': IMAGES,
  'is_favorite': true,
  'is_premium': true,
  'location': LOCATIONS[1],
  'max_adults': 3,
  'preview_image': IMAGES[0],
  'price': 600,
  'rating': 3,
  'title': TITLES[1],
  'type': OFFER_TYPES[1]
}];

export const API_MOCK_REVIEWS = [{
  'comment': SENTENCES[1],
  'date': DATES[1].toISOString(),
  'id': 1,
  'rating': 3.5,
  'user': {
    'avatar_url': `userAvatar`,
    'id': 1,
    'is_pro': true,
    'name': `Alena`
  }
}];

export const API_MOCK_APP_USER = {
  'id': 1,
  'email': `alena@gmail.com`,
  'name': `Alena`,
  'avatar_url': `userAvatar`,
  'is_pro': true
};
