import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginInput from './login-input';

configure({
  adapter: new Adapter(),
});

describe(`LoginInput`, () => {
  it(`should LoginInput inputs be changed and onChange cb be invoked`, () => {
    const onChange = jest.fn();
    const wrapper = shallow(
        <LoginInput
          name={`email`}
          value={`keks@gmail.com`}
          onChange={onChange}
        />
    );
    wrapper.find(`input`).at(0).simulate(`change`);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
