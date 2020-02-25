import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import App from './app';
import {cities as locations, cityOffers} from '../../mocks/tests';

const city = `Brussels`;
const mockFn = () => {};
const mockStore = configureStore([]);

describe(`App`, () => {
  it(`should render App with Main`, () => {
    const store = mockStore({
      offers: cityOffers,
      cities: locations,
      activeCity: city,
      activeOffer: null
    });
    const tree = renderer.create(
        <Provider store={store}>
          <App
            onTitleClick={mockFn}
            onTabClick={mockFn}
          />
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render App with Property`, () => {
    const store = mockStore({
      offers: cityOffers,
      cities: locations,
      activeCity: city,
      activeOffer: cityOffers[0]
    });
    const tree = renderer.create(
        <Provider store={store}>
          <App
            onTitleClick={mockFn}
            onTabClick={mockFn}
          />,
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
