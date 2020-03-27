import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import withChange from './with-change';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withChange(MockComponent);
const mockEvent = {currentTarget: {value: `keks@gmail.com`}};

describe(`withLogin HOC`, () => {
  it(`should render wrapped component with initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    expect(wrapper.props().value).toHaveLength(0);
  });

  it(`should update wrapped component with user data`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    wrapper.props().onChange(mockEvent);
    expect(wrapper.props().value).toEqual(`keks@gmail.com`);
  });
});
