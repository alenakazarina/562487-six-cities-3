import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withRating from './with-rating';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withRating(MockComponent);

describe(`withRating HOC`, () => {
  it(`should render wrapped component with initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    expect(wrapper.props().ratingValue).toEqual(0);
    expect(wrapper.props().comment).toHaveLength(0);
    expect(wrapper.props().isDisabled).toBeTruthy();
  });

  it(`should update ratingValue of wrapped component`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    const mockEvent = {currentTarget: {value: 5}};
    wrapper.props().onRatingChange(mockEvent);
    expect(wrapper.props().ratingValue).toEqual(5);
  });

  it(`should update comment of wrapped component`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    const mockEvent = {currentTarget: {value: `Some text`}};
    wrapper.props().onTextChange(mockEvent);
    expect(wrapper.props().comment).toEqual(`Some text`);
  });

  it(`should reset wrapped component inputs to initial state on sub,it`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    const mockEvent1 = {currentTarget: {value: 5}};
    const mockEvent2 = {currentTarget: {value: `Some text`}};
    wrapper.props().onRatingChange(mockEvent1);
    wrapper.props().onTextChange(mockEvent2);
    wrapper.props().resetFormInputs();
    expect(wrapper.props().ratingValue).toEqual(0);
    expect(wrapper.props().comment).toHaveLength(0);
    expect(wrapper.props().isDisabled).toBeTruthy();
  });
});
