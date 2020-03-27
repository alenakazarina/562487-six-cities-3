import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import PrivateRoute from './private-route';
import {STORE_WITH_AUTH} from '../../mocks/tests';

const PATH = `/favorites`;

describe(`PrivateRoute`, () => {
  it(`should render PrivateRoute`, () => {
    const render = jest.fn();
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <PrivateRoute
              isAuth={true}
              exact
              path={PATH}
              render={render}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
