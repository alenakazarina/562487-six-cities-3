export const cityOffers = [{
  id: `01`,
  previewImage: `image`,
  title: `title`,
  images: [`image`, `image`],
  isFavorite: true,
  isPremium: false,
  rating: 3,
  features: {
    type: `House`,
    bedrooms: 3,
    maxAdults: 6
  },
  price: 200,
  amenities: [`amenity`, `amenity`],
  host: {
    id: `06`,
    name: `James`,
    isPro: true,
    avatarUrl: `avatar`
  },
  description: `House description`,
  reviews: [{
    id: `110`,
    user: {
      id: `10`,
      name: `Bob`,
      isPro: false,
      avatarUrl: `avatar`
    },
    rating: 4,
    comment: `comment`,
    date: new Date(`2019-04-24`)
  }]
},
{
  id: `02`,
  previewImage: `image`,
  title: `title`,
  images: [`image`, `image`],
  isFavorite: true,
  isPremium: false,
  rating: 3,
  features: {
    type: `Hotel`,
    bedrooms: 3,
    maxAdults: 6
  },
  price: 200,
  amenities: [`amenity`, `amenity`],
  host: {
    id: `03`,
    name: `Bob`,
    isPro: true,
    avatarUrl: `avatar`
  },
  description: `Hotel description`,
  reviews: [{
    id: `05`,
    user: {
      id: `111`,
      name: `Bob`,
      isPro: false,
      avatarUrl: `avatar`
    },
    rating: 4,
    comment: `comment`,
    date: new Date(`2019-04-24`)
  }]
}];

const locations = [
  {
    name: `Location1`,
    location: {
      latitude: 53.552645,
      longitude: 9.966287,
      zoom: 13
    }
  },
  {
    name: `Location2`,
    location: {
      latitude: 53.552645,
      longitude: 9.966287,
      zoom: 13
    }
  },
];

export const mockCity = {
  name: `Location`,
  location: {
    latitude: 53.552645,
    longitude: 9.966287,
    zoom: 13
  }
};

export const nearOffers = cityOffers.map((offer, i) =>
  Object.assign({}, offer, {id: `${i}`}, {city: mockCity}));

export const appOffers = locations.map((location) => ({
  city: location,
  offers: [
    Object.assign({}, cityOffers[0], {city: location}),
    Object.assign({}, cityOffers[1], {city: location})
  ]
}));

export const users = [{
  id: `01`,
  name: `James`,
  isPro: true,
  avatarUrl: `avatar`
},
{
  id: `02`,
  name: `Bob`,
  isPro: false,
  avatarUrl: `avatar`
}];

export const reviews = [{
  id: `01`,
  user: {
    id: `10`,
    name: `Bob`,
    isPro: false,
    avatarUrl: `avatar`
  },
  rating: 4,
  comment: `comment`,
  date: new Date(`2019-04-24`)
},
{
  id: `02`,
  user: {
    id: `20`,
    name: `Jane`,
    isPro: false,
    avatarUrl: `avatar`
  },
  rating: 5,
  comment: `comment`,
  date: new Date(`2019-04-24`)
}];
