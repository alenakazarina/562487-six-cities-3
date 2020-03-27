import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import LoginForm from './login-form';
import {LOGIN, PASSWORD} from '../../mocks/const';

configure({
  adapter: new Adapter(),
});
const mockFn = jest.fn();

describe(`LoginForm`, () => {
  it(`should LoginForm be submitted and onSubmit cb be invoked`, () => {
    const setDisabled = jest.fn();
    const login = jest.fn();
    const wrapper = mount(
        <LoginForm
          userLogin={LOGIN}
          userPassword={PASSWORD}
          errorStatus={0}
          isDisabled={false}
          setDisabled={setDisabled}
          login={login}
          onChange={mockFn}
        />
    );
    wrapper.find(`form`).simulate(`submit`);
    expect(setDisabled).toHaveBeenCalledTimes(1);
    expect(setDisabled.mock.calls[0][0]).toEqual(true);
    expect(login).toHaveBeenCalledTimes(1);
  });
});
