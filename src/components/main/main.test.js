import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const ChildNodeMock = () => <div>Children</div>;

describe(`Main`, () => {
  it(`should render Main correctly with children and no empty offers`, () => {
    const tree = renderer.create(
        <Main isEmpty={false}>
          <ChildNodeMock />
        </Main>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render Main correctly with children and empty offers`, () => {
    const tree = renderer.create(
        <Main isEmpty={true}>
          <ChildNodeMock />
        </Main>,
        {createNodeMock: () => document.createElement(`div`)}
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

