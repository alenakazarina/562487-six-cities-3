import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoginForm from './login-form';

const mockFn = () => {};

describe(`LoginForm`, () => {
  it(`should render LoginForm with initial state`, () => {
    const tree = renderer.create(
        <LoginForm
          errorStatus={0}
          isDisabled={false}
          setDisabled={mockFn}
          login={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LoginForm filled with data`, () => {
    const tree = renderer.create(
        <LoginForm
          errorStatus={0}
          isDisabled={false}
          setDisabled={mockFn}
          login={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LoginForm disabled`, () => {
    const tree = renderer.create(
        <LoginForm
          errorStatus={0}
          isDisabled={true}
          setDisabled={mockFn}
          login={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
