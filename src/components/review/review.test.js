import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';

const review = {
  id: `01`,
  user: {
    id: `10`,
    name: `Bob`,
    isPro: false,
    avatarUrl: `avatar`
  },
  rating: 4,
  comment: `comment`,
  date: new Date(`2019-04-24`)
};

describe(`Review`, () => {
  it(`should render Review correctly`, () => {
    const tree = renderer.create(
        <Review review={review}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
