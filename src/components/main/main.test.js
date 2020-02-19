import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {appOffers} from '../../mocks/tests';

const {city, offers} = appOffers[0];

const onTitleClick = () => {};

describe(`Main`, () => {
  it(`should render Main correctly with no empty offers`, () => {
    const tree = renderer.create(
        <Main
          city={city}
          offers={offers}
          onTitleClick={onTitleClick}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with empty offers`, () => {
    const tree = renderer.create(
        <Main
          city={city}
          offers={[]}
          onTitleClick={onTitleClick}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

