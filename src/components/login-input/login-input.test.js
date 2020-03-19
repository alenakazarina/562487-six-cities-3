import React from 'react';
import renderer from 'react-test-renderer';
import LoginInput from './login-input';

const mockFn = () => {};

describe(`LoginInput`, () => {
  it(`should render LoginInput email`, () => {
    const tree = renderer.create(
        <LoginInput
          name={`email`}
          value={`keks@gmail.com`}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LoginInput password`, () => {
    const tree = renderer.create(
        <LoginInput
          name={`password`}
          value={`SecretCatPass`}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
