import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import PlacesList from './places-list';
import {CITY_OFFERS} from '../../mocks/const';

const PREFIXES = [`cities`, `near-places`];
const mockFn = () => {};

describe(`PlacesList`, () => {
  it(`should render cities PlacesList`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <PlacesList
              prefix={PREFIXES[0]}
              offers={CITY_OFFERS}
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
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <PlacesList
              prefix={PREFIXES[1]}
              offers={CITY_OFFERS}
              onTitleClick={mockFn}
              onCardHoverChange={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
