import React from 'react';
import ReactDOM from 'react-dom';
import nanoid from 'nanoid';
import App from './components/app/app';

const LOCATIONS = [
  {
    title: `Paris`,
    isActive: true
  },
  {
    title: `Cologne`,
    isActive: false
  },
  {
    title: `Brussels`,
    isActive: false
  },
  {
    title: `Amsterdam`,
    isActive: false
  },
  {
    title: `Hamburg`,
    isActive: false
  },
  {
    title: `Dusseldorf`,
    isActive: false
  }
];

const OFFERS = [
  {
    id: nanoid(),
    title: `Beautiful & luxurious apartment at great location`
  },
  {
    id: nanoid(),
    title: `Wood and stone place`
  },
  {
    id: nanoid(),
    title: `Canal View Prinsengracht`
  },
  {
    id: nanoid(),
    title: `Nice, cozy, warm big bed apartment`
  },
  {
    id: nanoid(),
    title: `Cozy rooms in the city center`
  }
];

ReactDOM.render(<App locations={LOCATIONS} offers={OFFERS} />, document.querySelector(`#root`));
