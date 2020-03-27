import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoginInput from './login-input';
import {LOGIN, PASSWORD} from '../../mocks/const';

const mockFn = jest.fn();

describe(`LoginInput`, () => {
  it(`should render LoginInput email`, () => {
    const tree = renderer.create(
        <LoginInput
          name={`email`}
          value={LOGIN}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render LoginInput password`, () => {
    const tree = renderer.create(
        <LoginInput
          name={`password`}
          value={PASSWORD}
          onChange={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
