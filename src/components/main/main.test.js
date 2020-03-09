import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth, storeWithNoOffers} from '../../mocks/tests';
import Main from './main';

const mockFn = () => {};

describe(`Main`, () => {
  it(`should render Main correctly with no empty offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <Main renderHeader={mockFn} />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with empty offers`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoOffers}>
          <BrowserRouter>
            <Main renderHeader={mockFn} />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

