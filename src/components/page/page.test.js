import React from 'react';
import renderer from 'react-test-renderer';
import Page from './page';

const className = `main`;
const pageContent = <div>Page content</div>;

describe(`Page`, () => {
  it(`should render main Page correctly`, () => {
    const tree = renderer.create(
        <Page className={className}>
          {pageContent}
        </Page>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
