import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import RatingInput from './rating-input';

configure({
  adapter: new Adapter(),
});

describe(`RatingInput`, () => {
  it(`should RatingInput be changed and onChange cb be invoked`, () => {
    const onChange = jest.fn();
    const wrapper = mount(
        <RatingInput
          rating={{value: 5, title: `perfect`}}
          isChecked={false}
          onChange={onChange}
        />
    );
    wrapper.find(`input`).simulate(`change`);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
