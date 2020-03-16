import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withMessage from './with-message';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const mockFn = () => {};
const MockComponentWrapped = withMessage(MockComponent);

describe(`withMessage HOC`, () => {
  it(`should render wrapped component with error message`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          errorStatus={404}
          resetError={mockFn}
        />
    );
    expect(wrapper.exists(`.message`)).toBe(true);
    expect(wrapper.find(`.message__header`).text()).toBe(`Error status code: 404`);
  });

  it(`should render wrapped component without error message`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          errorStatus={0}
          resetError={mockFn}
        />
    );
    expect(wrapper.exists(`.message`)).toBe(false);
  });
});
