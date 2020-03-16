import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import {cityOffers, reviews} from '../../mocks/const';
import Reviews from './reviews';

const mockFn = () => {};

describe(`Reviews`, () => {
  it(`should render Reviews with Form`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Reviews
              isAuth
              errorStatus={0}
              activeOffer={cityOffers[0]}
              reviews={reviews}
              onReviewSubmit={mockFn}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Reviews without Form`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Reviews
              isAuth={false}
              errorStatus={0}
              activeOffer={cityOffers[0]}
              reviews={reviews}
              onReviewSubmit={mockFn}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Reviews with empty reviews`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Reviews
              isAuth={true}
              errorStatus={0}
              activeOffer={cityOffers[0]}
              reviews={[]}
              onReviewSubmit={mockFn}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
