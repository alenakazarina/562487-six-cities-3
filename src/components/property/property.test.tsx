import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import {CITY_OFFERS, APP_USERS, REVIEWS} from '../../mocks/const';
import Property from './property';

const mockFn = () => {};

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <Property
              isAuth
              user={APP_USERS[0]}
              errorStatus={0}
              activeOffer={CITY_OFFERS[0]}
              nearOffers={CITY_OFFERS.slice(1)}
              reviews={REVIEWS}
              onReviewSubmit={mockFn}
              onOfferPageLoad={mockFn}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
