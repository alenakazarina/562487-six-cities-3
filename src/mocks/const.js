const titles = [
  `Amazing and Extremely Central Flat`,
  `The house among olive`,
  `Nice, cozy, warm big bed apartment`
];

const galleryImages = [`image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `image7`];

export const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const locations = [
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

const offerTypes = [`apartment`, `room`, `house`, `hotel`];

const goods = [`Breakfast`, `Laptop friendly workspace`, `Washer`];

const sentences = [
  `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
  `In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`
];

export const users = [
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

export const appUsers = users.map((user) => Object.assign({}, user, {email: `user@gmail.com`}));

const dates = [
  new Date(`2020.03.04 14:00`),
  new Date(`2020.03.03 10:00`)
];

export const reviews = [{
  id: 1,
  user: users[0],
  rating: 4,
  comment: sentences[0],
  date: dates[0]
}, {
  id: 2,
  user: users[1],
  rating: 5,
  comment: sentences[1],
  date: dates[1]
}];

export const cityOffers = [{
  id: 1,
  city: locations[0],
  previewImage: galleryImages[0],
  images: galleryImages,
  title: titles[0],
  isFavorite: true,
  isPremium: true,
  rating: 5,
  type: offerTypes[0],
  bedrooms: 3,
  maxAdults: 5,
  price: 400,
  amenities: goods,
  host: users[0],
  description: sentences[0],
  location: locations[0].location
}, {
  id: 2,
  city: locations[1],
  previewImage: galleryImages[2],
  images: galleryImages,
  title: titles[1],
  isFavorite: false,
  isPremium: false,
  rating: 4,
  type: offerTypes[2],
  bedrooms: 1,
  maxAdults: 7,
  price: 500,
  amenities: goods,
  host: users[1],
  description: sentences[1],
  location: locations[1].location
}, {
  id: 3,
  city: locations[1],
  previewImage: galleryImages[2],
  images: galleryImages,
  title: titles[0],
  isFavorite: false,
  isPremium: true,
  rating: 3,
  type: offerTypes[1],
  bedrooms: 2,
  maxAdults: 2,
  price: 600,
  amenities: goods,
  host: users[0],
  description: sentences[0],
  location: locations[1].location
}];

export const favoriteOffers = cityOffers.map((offer) => Object.assign({}, offer, {isFavorite: true}));

export const apiMockOffers = [{
  'bedrooms': 3,
  'city': `Paris`,
  'description': sentences[1],
  'goods': goods,
  'host': {
    'avatar_url': `avatar`,
    'id': 1,
    'is_pro': true,
    'name': `Alena`
  },
  'id': 1,
  'images': galleryImages,
  'is_favorite': true,
  'is_premium': true,
  'location': locations[1],
  'max_adults': 3,
  'preview_image': galleryImages[0],
  'price': 600,
  'rating': 3,
  'title': titles[1],
  'type': offerTypes[1]
}];

export const apiMockReviews = [{
  'comment': sentences[1],
  'date': dates[1].toISOString(),
  'id': 1,
  'rating': 3.5,
  'user': {
    'avatar_url': `userAvatar`,
    'id': 1,
    'is_pro': true,
    'name': `Alena`
  }
}];
