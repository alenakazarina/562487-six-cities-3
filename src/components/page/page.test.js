import React from 'react';
import renderer from 'react-test-renderer';
import Page from './page';

const className = `main`;
const PageChildNode = () => <div>Page content</div>;

describe(`Page`, () => {
  it(`should render main Page correctly`, () => {
    const tree = renderer.create(
        <Page className={className}>
          <PageChildNode />
        </Page>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render property Page correctly`, () => {
    const tree = renderer.create(
        <Page className={className}>
          <PageChildNode />
        </Page>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
