import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import App from './app';
import {storeWithNoAuth} from '../../mocks/tests';

describe(`App`, () => {
  it(`should render App`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoAuth}>
          <App />
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
