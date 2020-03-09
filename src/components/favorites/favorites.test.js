import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {storeWithAuth} from '../../mocks/tests';
import Favorites from './favorites';

const mockFn = () => {};

describe(`Favorites`, () => {
  it(`should render Favorites with no empty favorites offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Favorites
              isEmpty={false}
              renderHeader={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Favorites with empty favorites offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Favorites
              isEmpty={true}
              renderHeader={mockFn}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

