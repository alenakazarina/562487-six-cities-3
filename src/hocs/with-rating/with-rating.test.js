import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withRating from './with-rating';
import {cityOffers} from '../../mocks/const';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const mockFn = () => {};
const MockComponentWrapped = withRating(MockComponent);
const mockEvents = [
  {currentTarget: {value: 5, name: `rating`}},
  {currentTarget: {value: `Some text`, name: `review`}}
];

describe(`withRating HOC`, () => {
  it(`should render wrapped component with initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          reviewsCount={1}
          onReviewSubmit={mockFn}
        />
    );
    expect(wrapper.props().ratingValue).toEqual(0);
    expect(wrapper.props().comment).toHaveLength(0);
  });

  it(`should update wrapped component with user data`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          reviewsCount={1}
          activeOffer={cityOffers[0]}
          onReviewSubmit={mockFn}
        />
    );
    wrapper.props().onChange(mockEvents[0]);
    expect(wrapper.props().ratingValue).toEqual(5);
    wrapper.props().onChange(mockEvents[1]);
    expect(wrapper.props().comment).toEqual(`Some text`);
  });

  it(`should call on submit callback with user data`, () => {
    const onReviewSubmit = jest.fn();
    const wrapper = shallow(
        <MockComponentWrapped
          reviewsCount={1}
          activeOffer={cityOffers[0]}
          onReviewSubmit={onReviewSubmit}
        />
    );
    wrapper.props().onChange(mockEvents[0]);
    wrapper.props().onChange(mockEvents[1]);
    wrapper.props().onSubmit();
    expect(onReviewSubmit).toHaveBeenCalledTimes(1);
    expect(onReviewSubmit.mock.calls[0][0]).toBe(1);
    expect(onReviewSubmit.mock.calls[0][1]).toMatchObject({
      rating: 5,
      text: `Some text`
    });
  });
});
