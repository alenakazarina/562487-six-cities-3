import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {STORE_WITH_AUTH} from '../../mocks/tests';
import {PlaceCard} from './place-card';
import {CITY_OFFERS} from '../../mocks/const';

const PREFIX = `cities`;

configure({
  adapter: new Adapter(),
});
const mockFn = jest.fn();

describe(`PlaceCard`, () => {
  it(`should card on hover to call cb with offer on mouseenter and null on mouseleave`, () => {
    const cardOffer = CITY_OFFERS[0];
    const setActiveOffer = jest.fn();
    const placeCard = mount(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <PlaceCard
              prefix={PREFIX}
              offer={cardOffer}
              setActiveOffer={setActiveOffer}
              onFavoriteClick={mockFn}
            />
          </BrowserRouter>
        </Provider>
    );
    const card = placeCard.find(`article.place-card`);
    card.simulate(`mouseenter`);
    expect(setActiveOffer).toHaveBeenCalledTimes(1);
    expect(setActiveOffer.mock.calls[0][0]).toMatchObject(cardOffer);
    card.simulate(`mouseleave`);
    expect(setActiveOffer).toHaveBeenCalledTimes(2);
    expect(setActiveOffer.mock.calls[1][0]).toBe(null);
  });
});
