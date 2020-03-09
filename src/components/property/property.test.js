import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import Property from './property';

const mockFn = () => {};

describe(`Property`, () => {
  it(`should render Property correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Property
              id={1}
              renderHeader={mockFn}
              onOfferPageLoad={mockFn}
            />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
