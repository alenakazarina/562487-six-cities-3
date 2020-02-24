import React from 'react';
import renderer from 'react-test-renderer';
import LocationsList from './locations-list';
import {cities} from '../../mocks/tests';

const activeCity = `Brussels`;

describe(`LocationsList`, () => {
  it(`should render LocationsList correctly`, () => {
    const tree = renderer.create(
        <LocationsList
          cities={cities}
          activeCity={activeCity}
          onTabClick={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
