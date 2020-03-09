import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';
import {reviews} from '../../mocks/const';

describe(`Reviews`, () => {
  it(`should render Reviews correctly`, () => {
    const tree = renderer.create(
        <ReviewsList reviews={reviews}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
