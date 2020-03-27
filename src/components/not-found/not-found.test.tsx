import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {STORE_WITH_NO_AUTH} from '../../mocks/tests';
import {DEFAULT_USER} from '../../mocks/const';
import {NotFound} from './not-found';

const CITY = `Paris`;

describe(`NotFound`, () => {
  it(`should render NotFound Page correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_NO_AUTH}>
          <BrowserRouter>
            <NotFound
              isAuth={false}
              user={DEFAULT_USER}
              activeCity={CITY}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
