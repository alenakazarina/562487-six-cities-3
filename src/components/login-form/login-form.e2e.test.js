import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from './login-form';

configure({
  adapter: new Adapter(),
});
const mockFn = () => {};

describe(`LoginForm`, () => {
  it(`should LoginForm inputs be changed and onChange cb be invoked`, () => {
    const onChange = jest.fn();
    const wrapper = mount(
        <LoginForm
          userLogin={``}
          userPassword={``}
          errorStatus={0}
          isDisabled={false}
          setDisabled={mockFn}
          onChange={onChange}
          login={mockFn}
        />
    );
    wrapper.find(`input`).at(0).simulate(`change`, {target: {name: `email`, value: `keks@gmail.com`}});
    wrapper.find(`input`).at(1).simulate(`change`, {target: {name: `password`, value: `SecretCatPass`}});
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it(`should LoginForm be submitted and onSubmit cb be invoked`, () => {
    const setDisabled = jest.fn();
    const login = jest.fn();
    const wrapper = mount(
        <LoginForm
          userLogin={`keks@gmail.com`}
          userPassword={`SecretCatPass`}
          errorStatus={0}
          isDisabled={false}
          setDisabled={setDisabled}
          onChange={mockFn}
          login={login}
        />
    );
    wrapper.find(`form`).simulate(`submit`);
    expect(setDisabled).toHaveBeenCalledTimes(1);
    expect(setDisabled.mock.calls[0][0]).toEqual(true);
    expect(login).toHaveBeenCalledTimes(1);
    expect(login.mock.calls[0][0]).toMatchObject({
      login: `keks@gmail.com`,
      password: `SecretCatPass`
    });
  });
});
