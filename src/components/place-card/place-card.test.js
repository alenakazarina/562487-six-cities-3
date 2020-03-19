import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import PlaceCard from './place-card';
import {cityOffers} from '../../mocks/const';

const prefixes = [`cities`, `near-places`];
const mockFn = () => {};

describe(`PlaceCard`, () => {
  it(`should render cities PlaceCard`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <PlaceCard
              prefix={prefixes[0]}
              offer={cityOffers[0]}
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
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <PlaceCard
              prefix={prefixes[1]}
              offer={cityOffers[1]}
              setActiveOffer={mockFn}
              onFavoriteClick={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
