import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import Property from './property';
import {cityOffers, appUsers, reviews} from '../../mocks/const';

const mockFn = () => {};

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Property
              isAuth
              user={appUsers[0]}
              errorStatus={0}
              activeOffer={cityOffers[0]}
              nearOffers={cityOffers.slice(1)}
              reviews={reviews}
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
