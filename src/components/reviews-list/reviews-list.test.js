import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';
import {REVIEWS} from '../../mocks/const';

describe(`Reviews`, () => {
  it(`should render Reviews correctly`, () => {
    const tree = renderer.create(
        <ReviewsList reviews={REVIEWS}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
