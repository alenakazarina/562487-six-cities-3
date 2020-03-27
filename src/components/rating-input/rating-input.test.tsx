import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RatingInput from './rating-input';

const mockFn = jest.fn();

describe(`RatingInput`, () => {
  it(`should render RatingInput with rating equals perfect checked`, () => {
    const tree = renderer.create(
        <RatingInput
          rating={{value: 5, title: `perfect`}}
          isChecked={true}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render RatingInput with rating equals terribly not checked`, () => {
    const tree = renderer.create(
        <RatingInput
          rating={{value: 1, title: `terribly`}}
          isChecked={false}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
