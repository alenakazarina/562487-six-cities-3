import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews';
import {reviews} from '../../mocks/tests';

describe(`Reviews`, () => {
  it(`should render Reviews correctly`, () => {
    const tree = renderer.create(
        <Reviews reviews={reviews}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
