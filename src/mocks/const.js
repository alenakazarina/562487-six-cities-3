export const IMAGE_PATH = `./img/`;

const LOCATIONS_ZOOM = 13;

export const MONTHS = [
  `January`, `February`, `March`, `April`, `May`, `June`, `July`,
  `August`, `September`, `October`, `November`, `December`
];

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
  ],
  amenities: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Cabel TV`, `Fridge`],
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
};

export const UserData = {
  names: [`Douglas`, `James`, `Matthew`, `John`, `Leo`, `Robert`, `Dirk`],
  avatarUrls: [
    `user-1.jpg`,
    `user-2.jpg`,
    `user-3.jpg`,
    `user-4.jpg`,
    `user-5.jpg`,
  ],
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
};

export const LOCATIONS = [
  {
    name: `Paris`,
    location: {
      latitude: 48.856663,
      longitude: 2.351556,
      zoom: LOCATIONS_ZOOM
    }
  }, {
    name: `Cologne`,
    location: {
      latitude: 50.930779,
      longitude: 6.938399,
      zoom: LOCATIONS_ZOOM
    }
  }, {
    name: `Brussels`,
    location: {
      latitude: 50.851309,
      longitude: 4.351718,
      zoom: LOCATIONS_ZOOM
    }
  }, {
    name: `Amsterdam`,
    location: {
      latitude: 52.373057,
      longitude: 4.892557,
      zoom: LOCATIONS_ZOOM
    }
  }, {
    name: `Hamburg`,
    location: {
      latitude: 53.552645,
      longitude: 9.966287,
      zoom: LOCATIONS_ZOOM
    }
  }, {
    name: `Dusseldorf`,
    location: {
      latitude: 51.230569,
      longitude: 6.787428,
      zoom: LOCATIONS_ZOOM
    }
  }];
