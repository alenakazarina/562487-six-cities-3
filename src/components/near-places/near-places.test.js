import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {cityOffers} from '../../mocks/const';
import {storeWithAuth} from '../../mocks/tests';
import NearPlaces from './near-places';

describe(`NearPlaces`, () => {
  it(`should render NearPlaces correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <NearPlaces nearOffers={cityOffers} />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
