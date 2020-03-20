import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {CITY_OFFERS} from '../../mocks/const';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import NearPlaces from './near-places';

describe(`NearPlaces`, () => {
  it(`should render NearPlaces correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <NearPlaces nearOffers={CITY_OFFERS} />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
