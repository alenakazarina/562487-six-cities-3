import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withLogin from './with-login';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withLogin(MockComponent);
const mockEvents = [
  {currentTarget: {value: `keks@gmail.com`, name: `email`}},
  {currentTarget: {value: `SecretCatPass`, name: `password`}}
];

describe(`withLogin HOC`, () => {
  it(`should render wrapped component with initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    expect(wrapper.props().userLogin).toHaveLength(0);
    expect(wrapper.props().userPassword).toHaveLength(0);
  });

  it(`should update wrapped component with user data`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    wrapper.props().onChange(mockEvents[0]);
    expect(wrapper.props().userLogin).toEqual(`keks@gmail.com`);
    wrapper.props().onChange(mockEvents[1]);
    expect(wrapper.props().userPassword).toEqual(`SecretCatPass`);
  });
});
