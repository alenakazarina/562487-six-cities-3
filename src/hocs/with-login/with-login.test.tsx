import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import withLogin from './with-login';
import {LOGIN, PASSWORD} from '../../mocks/const';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withLogin(MockComponent);
const mockEvents = [
  {currentTarget: {value: LOGIN, name: `email`}},
  {currentTarget: {value: PASSWORD, name: `password`}}
];

describe(`withLogin HOC`, () => {
  it(`should render wrapped component with initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped reviewsCount={1} />
    );
    expect(wrapper.props().userLogin).toHaveLength(0);
    expect(wrapper.props().userPassword).toHaveLength(0);
  });

  it(`should update wrapped component with user data`, () => {
    const wrapper = shallow(
        <MockComponentWrapped reviewsCount={1} />
    );
    wrapper.props().onChange(mockEvents[0]);
    expect(wrapper.props().userLogin).toEqual(`keks@gmail.com`);
    wrapper.props().onChange(mockEvents[1]);
    expect(wrapper.props().userPassword).toEqual(`SecretCatPass`);
  });
});
