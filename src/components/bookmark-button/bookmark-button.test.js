import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import BookmarkButton from './bookmark-button';

describe(`BookmarkButton`, () => {
  it(`should render property's BookmarkButton active`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BookmarkButton
            id={1}
            prefix={`property`}
            isFavorite={true}
            width={31}
            height={33}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render place card's BookmarkButton`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BookmarkButton
            id={2}
            prefix={`place-card`}
            isFavorite={false}
            width={18}
            height={19}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

