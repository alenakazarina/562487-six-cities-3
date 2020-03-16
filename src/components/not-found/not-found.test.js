import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {storeWithNoAuth} from '../../mocks/tests';
import {defaultUser} from '../../mocks/const';
import {NotFound} from './not-found';

const city = `Paris`;

describe(`NotFound`, () => {
  it(`should render NotFound Page correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithNoAuth}>
          <BrowserRouter>
            <NotFound
              isAuth={false}
              user={defaultUser}
              activeCity={city}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
