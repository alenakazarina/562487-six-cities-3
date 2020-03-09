import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withHeader from './with-header';

configure({adapter: new Adapter()});

const MockComponent = () => (<div />);
const MockComponentWrapped = withHeader(MockComponent);

describe(`withHeader HOC`, () => {
  it(`should return Component with renderHeader prop`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    expect(wrapper.props()).toHaveProperty(`renderHeader`);
  });
});
