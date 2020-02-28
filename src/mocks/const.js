export const IMAGE_PATH = `./img/`;

export const MAP_ZOOM = 12;

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

export const Cities = {
  PARIS: {
    name: `Paris`,
    cityCenter: {
      latitude: 48.859335,
      longitude: 2.350730
    },
    offersLocations: [{
      latitude: 48.872344,
      longitude: 2.360418
    }, {
      latitude: 48.866015,
      longitude: 2.346708
    }, {
      latitude: 48.850586,
      longitude: 2.327006
    }, {
      latitude: 48.855066,
      longitude: 2.316033
    }]
  },
  COLOGNE: {
    name: `Cologne`,
    cityCenter: {
      latitude: 50.939485,
      longitude: 6.948775
    },
    offersLocations: [{
      latitude: 50.937764,
      longitude: 6.961390
    }, {
      latitude: 50.945324,
      longitude: 6.960608
    }, {
      latitude: 50.933751,
      longitude: 6.936701
    }, {
      latitude: 50.931175,
      longitude: 6.948593
    }]
  },
  BRUSSELS: {
    name: `Brussels`,
    cityCenter: {
      latitude: 50.855889,
      longitude: 4.351608
    },
    offersLocations: [{
      latitude: 50.854885,
      longitude: 4.345541
    }, {
      latitude: 50.858440,
      longitude: 4.329629
    }, {
      latitude: 50.835941,
      longitude: 4.346313
    }, {
      latitude: 50.834979,
      longitude: 4.351570
    }]
  },
  AMSTERDAM: {
    name: `Amsterdam`,
    cityCenter: {
      latitude: 52.371512,
      longitude: 4.893750
    },
    offersLocations: [{
      latitude: 52.370955,
      longitude: 4.873096
    }, {
      latitude: 52.379553,
      longitude: 4.873096
    }, {
      latitude: 52.390955,
      longitude: 4.909309
    }, {
      latitude: 52.360955,
      longitude: 4.909309
    }]
  },
  HAMBURG: {
    name: `Hamburg`,
    cityCenter: {
      latitude: 53.556238,
      longitude: 9.985139
    },
    offersLocations: [{
      latitude: 53.553348,
      longitude: 9.971704
    }, {
      latitude: 53.552588,
      longitude: 10.019478
    }, {
      latitude: 53.561941,
      longitude: 10.018891
    }, {
      latitude: 53.548758,
      longitude: 9.978013
    }]
  },
  DUSSELDORF: {
    name: `Dusseldorf`,
    cityCenter: {
      latitude: 51.225322,
      longitude: 6.774754
    },
    offersLocations: [{
      latitude: 51.219590,
      longitude: 6.774384
    }, {
      latitude: 51.232822,
      longitude: 6.780301
    }, {
      latitude: 51.220024,
      longitude: 6.792541
    }, {
      latitude: 51.215356,
      longitude: 6.781649
    }]
  }
};
