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
            isDisabled
            onRatingChange={mockFn}
            onTextChange={mockFn}
            resetFormInputs={mockFn}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
