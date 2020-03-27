export type Id = {
  id: number
};

export type UserType = Id & {
  name: string,
  isPro: boolean
  avatarUrl: string
};

export type AppUser = UserType & {
  email: string
};

export type AuthData = {
  login: string,
  password: string
};

export type Comment = {
  rating: number,
  text: string
};

export type Date = {
  date: Date
}

export type Review = Id & Comment & Date & {
  user: UserType
};

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
};

export type City = Location & {
  name: string,
  location: Location
};

export type OfferTypes = Id & {
  previewImage: string,
  title: string,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: `house` | `room` | `apartment` | `hotel`,
  bedrooms: number,
  maxAdults: number,
  price: number,
  amenities: string[],
  host: UserType,
  description: string,
  city: City,
  location: Location
};
