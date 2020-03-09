import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import PlacesList from './places-list';
import {cityOffers} from '../../mocks/const';

const prefixes = [`cities`, `near-places`];
const mockFn = () => {};

describe(`PlacesList`, () => {
  it(`should render cities PlacesList`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <PlacesList
              prefix={prefixes[0]}
              offers={cityOffers}
              onTitleClick={mockFn}
              onCardHoverChange={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render near places PlacesList`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <PlacesList
              prefix={prefixes[1]}
              offers={cityOffers}
              onTitleClick={mockFn}
              onCardHoverChange={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
