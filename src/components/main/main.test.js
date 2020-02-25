import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {cities, cityOffers} from '../../mocks/tests';

const activeCity = `Brussels`;
const mockFn = () => {};

describe(`Main`, () => {
  it(`should render Main correctly with no empty offers`, () => {
    const tree = renderer.create(
        <Main
          cities={cities}
          activeCity={activeCity}
          offers={cityOffers}
          onTitleClick={mockFn}
          onTabClick={mockFn}
          onCardMouseOver={mockFn}
          activeOffer={cityOffers[0]}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with empty offers`, () => {
    const tree = renderer.create(
        <Main
          cities={cities}
          activeCity={activeCity}
          offers={[]}
          onTitleClick={mockFn}
          onTabClick={mockFn}
          onCardMouseOver={mockFn}
          activeOffer={null}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

