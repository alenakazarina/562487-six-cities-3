import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {cityOffers} from '../../mocks/tests';

const onTitleClick = () => {};

describe(`Main`, () => {
  it(`should render Main correctly with no empty offers`, () => {
    const tree = renderer.create(
        <Main
          offers={cityOffers}
          onTitleClick={onTitleClick}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with empty offers`, () => {
    const tree = renderer.create(
        <Main
          offers={[]}
          onTitleClick={onTitleClick}
        />,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

