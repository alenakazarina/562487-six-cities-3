import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {storeWithAuth} from '../../mocks/tests';
import Cities from './cities';
import {cityOffers} from '../../mocks/const';

const city = `Brussels`;

describe(`Cities`, () => {
  it(`should render Cities with no empty offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Cities
              offers={cityOffers}
              activeCity={city}
              activeOffer={null}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Cities with empty offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Cities
              offers={[]}
              activeCity={city}
              activeOffer={null}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

