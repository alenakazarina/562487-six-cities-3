import React from 'react';
import ReactDOM from 'react-dom';
import nanoid from 'nanoid';
import App from './components/app/app.jsx';

const LOCATIONS = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const offers = [
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

ReactDOM.render(<App locations={LOCATIONS} offers={offers} />, document.querySelector(`#root`));
