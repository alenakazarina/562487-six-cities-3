import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {title, onTitleClick} from '../../mock/tests';

it(`should render PlaceCard with title`, () => {
  const tree = renderer.create(
      <PlaceCard
        title={title}
        onTitleClick={onTitleClick}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
