import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SubmitButton from './submit-button';

describe(`SubmitButton`, () => {
  it(`should render login SubmitButton`, () => {
    const tree = renderer.create(
        <SubmitButton
          prefix="login"
          isDisabled={false}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render login SubmitButton disabled`, () => {
    const tree = renderer.create(
        <SubmitButton
          prefix="login"
          isDisabled={true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render reviews SubmitButton`, () => {
    const tree = renderer.create(
        <SubmitButton
          prefix="reviews"
          isDisabled={false}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render reviews SubmitButton disabled`, () => {
    const tree = renderer.create(
        <SubmitButton
          prefix="reviews"
          isDisabled={true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
