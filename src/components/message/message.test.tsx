import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Message from './message';

const mockFn = jest.fn();

describe(`Message`, () => {
  it(`should render Message correctly`, () => {
    const tree = renderer.create(
        <Message
          status={400}
          onClose={mockFn}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
