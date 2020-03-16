import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import {PlaceCard} from './place-card';
import {cityOffers} from '../../mocks/const';

configure({
  adapter: new Adapter(),
});

const prefixes = [`cities`, `near-places`];

describe(`PlaceCard`, () => {
  it(`should card on hover to call cb with offer on mouseenter and null on mouseleave`, () => {
    const cardOffer = cityOffers[0];
    const setActiveOffer = jest.fn();
    const placeCard = mount(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <PlaceCard
              prefix={prefixes[0]}
              offer={cardOffer}
              setActiveOffer={setActiveOffer}
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
