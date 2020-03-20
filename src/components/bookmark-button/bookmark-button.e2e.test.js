import React from 'react';
import {Provider} from 'react-redux';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookmarkButton from './bookmark-button';
import {STORE_WITH_AUTH} from '../../mocks/tests';

const mockFn = () => {};
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
    expect(onFavoriteClick).toHaveBeenCalledTimes(1);
    expect(onFavoriteClick.mock.calls[0][0]).toBe(1);
    expect(onFavoriteClick.mock.calls[0][1]).toBe(false);
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
    expect(onFavoriteClick).toHaveBeenCalledTimes(1);
    expect(onFavoriteClick.mock.calls[0][0]).toBe(2);
    expect(onFavoriteClick.mock.calls[0][1]).toBe(true);
  });
});
