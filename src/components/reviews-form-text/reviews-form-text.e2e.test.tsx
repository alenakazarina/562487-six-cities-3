import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import ReviewsFormText from './reviews-form-text';

configure({
  adapter: new Adapter(),
});

describe(`ReviewsFormText`, () => {
  it(`should ReviewsFormText be changed and onChange cb be invoked`, () => {
    const onChange = jest.fn();
    const wrapper = mount(
        <ReviewsFormText
          text={`Some text`}
          onChange={onChange}
        />
    );
    wrapper.find(`textarea`).simulate(`change`);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
