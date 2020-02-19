import React from 'react';
import renderer from 'react-test-renderer';
import BookmarkButton from './bookmark-button';

describe(`BookmarkButton`, () => {
  it(`should render property's BookmarkButton active`, () => {
    const tree = renderer.create(
        <BookmarkButton
          prefix={`property`}
          isFavorite={true}
          width={31}
          height={33}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render place card's BookmarkButton`, () => {
    const tree = renderer.create(
        <BookmarkButton
          prefix={`place-card`}
          isFavorite={false}
          width={18}
          height={19}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

