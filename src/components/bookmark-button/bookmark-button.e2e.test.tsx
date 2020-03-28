import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {configure, mount} from 'enzyme';
import BookmarkButton from './bookmark-button';
import {STORE_WITH_AUTH} from '../../mocks/tests';

const mockFn = jest.fn();
configure({
  adapter: new Adapter(),
});

describe(`BookmarkButton`, () => {
  it(`should BookmarkButton be pressed and invoke cb to remove from favorites`, () => {
    const onFavoriteClick = jest.fn();
    const wrapper = mount(
        <Provider store={STORE_WITH_AUTH}>
          <BookmarkButton
            id={1}
            prefix={`property`}
            width={31}
            height={33}
            isDisabled={false}
            setDisabled={mockFn}
            onFavoriteClick={onFavoriteClick}
          />
        </Provider>
    );

    wrapper.find(`button`).at(0).simulate(`click`);
    expect(onFavoriteClick).toHaveBeenNthCalledWith(1, 1, false);
  });

  it(`should BookmarkButton be pressed and invoke cb to add to favorites`, () => {
    const onFavoriteClick = jest.fn();
    const wrapper = mount(
        <Provider store={STORE_WITH_AUTH}>
          <BookmarkButton
            id={2}
            prefix={`property`}
            width={31}
            height={33}
            isDisabled={false}
            setDisabled={mockFn}
            onFavoriteClick={onFavoriteClick}
          />
        </Provider>
    );

    wrapper.find(`button`).at(0).simulate(`click`);
    expect(onFavoriteClick).toHaveBeenNthCalledWith(1, 2, true);
  });
});
