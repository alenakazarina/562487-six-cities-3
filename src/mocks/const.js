export const IMAGE_PATH = `./img/`;

export const LOCATIONS = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const OfferTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

export const OffersData = {
  maxRating: 5,
  types: Object.values(OfferTypes),
  titles: [
    `Canal View room`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`,
    `Beautiful & luxurious apartment at great location`,
    `Cozy rooms in the city center`
  ],
  images: [
    `apartment-01.jpg`,
    `apartment-02.jpg`,
    `apartment-03.jpg`,
    `apartment-04.jpg`,
    `apartment-05.jpg`,
  ]
};
