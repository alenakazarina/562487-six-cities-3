import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewsFormText from './reviews-form-text';

const mockFn = jest.fn();

describe(`ReviewsFormText`, () => {
  it(`should render ReviewsFormText correctly`, () => {
    const tree = renderer.create(
        <ReviewsFormText
          comment={`Some text`}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
