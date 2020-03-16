import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import LocationsList from './locations-list';
import {cities} from '../../mocks/const';

const activeCity = `Brussels`;

describe(`LocationsList`, () => {
  it(`should render LocationsList correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <LocationsList
            cities={cities}
            activeCity={activeCity}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
