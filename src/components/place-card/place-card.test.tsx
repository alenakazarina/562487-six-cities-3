import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import PlaceCard from './place-card';
import {CITY_OFFERS} from '../../mocks/const';

const PREFIXES = [`cities`, `near-places`];
const mockFn = jest.fn();

describe(`PlaceCard`, () => {
  it(`should render cities PlaceCard`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <PlaceCard
              prefix={PREFIXES[0]}
              offer={CITY_OFFERS[0]}
              setActiveOffer={mockFn}
              onFavoriteClick={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render near places PlaceCard`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <PlaceCard
              prefix={PREFIXES[1]}
              offer={CITY_OFFERS[1]}
              setActiveOffer={mockFn}
              onFavoriteClick={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
