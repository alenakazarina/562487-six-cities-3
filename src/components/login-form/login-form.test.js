import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './login-form';
import {LOGIN, PASSWORD} from '../../mocks/const';

const mockFn = () => {};

describe(`LoginForm`, () => {
  it(`should render LoginForm with initial state`, () => {
    const tree = renderer.create(
        <LoginForm
          userLogin={``}
          userPassword={``}
          errorStatus={0}
          isDisabled={false}
          setDisabled={mockFn}
          onChange={mockFn}
          login={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LoginForm filled with data`, () => {
    const tree = renderer.create(
        <LoginForm
          userLogin={LOGIN}
          userPassword={PASSWORD}
          errorStatus={0}
          isDisabled={false}
          setDisabled={mockFn}
          onChange={mockFn}
          login={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LoginForm disabled`, () => {
    const tree = renderer.create(
        <LoginForm
          userLogin={LOGIN}
          userPassword={PASSWORD}
          errorStatus={0}
          isDisabled={true}
          setDisabled={mockFn}
          onChange={mockFn}
          login={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
