import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeWithAuth} from '../../mocks/tests';
import PlaceCard from './place-card';
import {cityOffers} from '../../mocks/const';

configure({
  adapter: new Adapter(),
});

const prefixes = [`cities`, `near-places`];
const mockFn = () => {};

describe(`PlaceCard`, () => {
  it(`should card title be pressed`, () => {
    const offer = cityOffers[0];
    const onTitleClick = jest.fn();
    const placeCard = mount(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <PlaceCard
              prefix={prefixes[0]}
              offer={cityOffers[0]}
              onTitleClick={onTitleClick}
              onMouseEnter={mockFn}
              onMouseLeave={mockFn}
            />
          </BrowserRouter>
        </Provider>
    );
    placeCard.find(`h2.place-card__name a`).simulate(`click`);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
    expect(onTitleClick.mock.calls[0][0]).toMatchObject(offer);
  });

  it(`should card on mouseenter to call cb with card and offer`, () => {
    const cardOffer = cityOffers[0];
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const placeCard = mount(
        <Provider store={storeWithAuth}>
          <BrowserRouter>
            <PlaceCard
              prefix={prefixes[0]}
              offer={cardOffer}
              onTitleClick={mockFn}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </BrowserRouter>
        </Provider>
    );
    const card = placeCard.find(`article.place-card`);
    card.simulate(`mouseenter`);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(cardOffer);
    card.simulate(`mouseleave`);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
