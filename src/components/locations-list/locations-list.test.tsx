import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import {CITIES} from '../../mocks/const';
import LocationsList from './locations-list';

const CITY = `Brussels`;

describe(`LocationsList`, () => {
  it(`should render LocationsList correctly`, () => {
    const tree = renderer.create(
        <Provider store={STORE_WITH_AUTH}>
          <LocationsList
            cities={CITIES}
            activeCity={CITY}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
