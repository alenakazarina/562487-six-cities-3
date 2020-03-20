import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import {Cities} from './cities';
import {CITY_OFFERS} from '../../mocks/const';

const CITY = `Brussels`;

describe(`Cities`, () => {
  it(`should render Cities with no empty offers`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <Cities
              offers={CITY_OFFERS}
              activeCity={CITY}
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
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <Cities
              offers={[]}
              activeCity={CITY}
              activeOffer={null}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

