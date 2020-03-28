import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import ReviewsForm from './reviews-form';

configure({
  adapter: new Adapter(),
});
const mockFn = jest.fn();

describe(`ReviewsForm`, () => {
  it(`should ReviewsForm inputs and textarea be changed and onChange cb be invoked`, () => {
    const onChange = jest.fn();
    const wrapper = mount(
        <ReviewsForm
          rating={0}
          text={``}
          errorStatus={0}
          reviewsCount={1}
          offerId={1}
          isDisabled={false}
          setDisabled={mockFn}
          onChange={onChange}
          onReviewSubmit={mockFn}
        />
    );
    wrapper.find(`input`).at(0).simulate(`change`);
    wrapper.find(`.form__textarea`).simulate(`change`);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it(`should ReviewsForm be submitted and set inputs disabled`, () => {
    const setDisabled = jest.fn();
    const onReviewSubmit = jest.fn();
    const wrapper = mount(
        <ReviewsForm
          rating={5}
          text={`I hope to have the opportunity to come back. Thank you.`}
          errorStatus={0}
          reviewsCount={1}
          offerId={1}
          isDisabled={false}
          setDisabled={setDisabled}
          onChange={mockFn}
          onReviewSubmit={onReviewSubmit}
        />
    );

    wrapper.find(`button.form__submit`).simulate(`submit`);
    expect(setDisabled).toHaveBeenCalledTimes(1);
    expect(setDisabled.mock.calls[0][0]).toEqual(true);
    expect(onReviewSubmit).toHaveBeenCalledTimes(1);
    expect(onReviewSubmit.mock.calls[0][0]).toEqual(1);
    expect(onReviewSubmit.mock.calls[0][1]).toMatchObject({
      rating: 5,
      text: `I hope to have the opportunity to come back. Thank you.`
    });
  });


  it(`should not ReviewsForm be submitted when inputs values are invalid`, () => {
    const setDisabled = jest.fn();
    const onReviewSubmit = jest.fn();
    const wrapper = mount(
        <ReviewsForm
          rating={5}
          text={`Review Text`}
          errorStatus={0}
          reviewsCount={1}
          offerId={1}
          isDisabled={false}
          setDisabled={setDisabled}
          onChange={mockFn}
          onReviewSubmit={onReviewSubmit}
        />
    );

    expect(wrapper.find(`button.form__submit`).props().disabled).toBeTruthy();
  });

  it(`should not ReviewsForm be submitted when inputs values are invalid`, () => {
    const setDisabled = jest.fn();
    const onReviewSubmit = jest.fn();
    const wrapper = mount(
        <ReviewsForm
          rating={0}
          text={` I hope to have the opportunity to come back. Thank you.`}
          errorStatus={0}
          reviewsCount={1}
          offerId={1}
          isDisabled={false}
          setDisabled={setDisabled}
          onChange={mockFn}
          onReviewSubmit={onReviewSubmit}
        />
    );

    expect(wrapper.find(`button.form__submit`).props().disabled).toBeTruthy();
  });
});
