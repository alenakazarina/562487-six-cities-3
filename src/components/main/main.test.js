import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {locations, offers} from '../../mock/tests';

const onTitleClick = () => {};

it(`should render Main correctly with no empty offers`, () => {
  const tree = renderer.create(
      <Main
        locations={locations}
        offers={offers}
        onTitleClick={onTitleClick}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`should render Main correctly with empty offers`, () => {
  const tree = renderer.create(
      <Main
        locations={locations}
        offers={[]}
        onTitleClick={onTitleClick}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
