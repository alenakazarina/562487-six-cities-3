import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import BookmarkButton from './bookmark-button';

const mockFn = () => {};

describe(`BookmarkButton`, () => {
  it(`should render property's BookmarkButton active`, () => {
    const tree = renderer.create(
        <Provider store={storeWithAuth}>
          <BookmarkButton
            id={1}
            prefix={`property`}
            width={31}
            height={33}
            isDisabled={false}
            setDisabled={mockFn}
            onFavoriteClick={mockFn}
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
            width={18}
            height={19}
            isDisabled={false}
            setDisabled={mockFn}
            onFavoriteClick={mockFn}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

