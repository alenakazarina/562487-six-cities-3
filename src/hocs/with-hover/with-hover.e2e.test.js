import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withHover from './with-hover';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withHover(MockComponent);

describe(`withHover HOC`, () => {
  it(`should invoke callback on hover events of wrapped component `, () => {
    const onCardHoverChange = jest.fn();
    const wrapper = shallow(
        <MockComponentWrapped
          onCardHoverChange={onCardHoverChange}
        />
    );
    wrapper.props().onMouseEnter();
    expect(onCardHoverChange).toHaveBeenCalledTimes(1);
    wrapper.props().onMouseLeave();
    expect(onCardHoverChange).toHaveBeenCalledTimes(2);
  });
});
