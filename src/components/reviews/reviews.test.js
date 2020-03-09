import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import Reviews from './reviews';

describe(`Reviews`, () => {
  it(`should render Reviews correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Reviews />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
