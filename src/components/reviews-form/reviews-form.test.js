import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import ReviewsForm from './reviews-form';

const mockFn = () => {};

describe(`ReviewForm`, () => {
  it(`should render ReviewForm correctly`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <ReviewsForm
            comment={``}
            ratingValue={0}
            errorStatus={0}
            reviewsCount={1}
            onChange={mockFn}
            onSubmit={mockFn}
          />
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
