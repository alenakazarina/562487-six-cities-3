import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import {cityOffers} from '../../mocks/tests';

configure({
  adapter: new Adapter(),
});

describe(`PlaceCard`, () => {
  it(`should card title be pressed`, () => {
    const offer = cityOffers[0];
    const onTitleClick = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          prefix={`cities`}
          offer={offer}
          onTitleClick={onTitleClick}
          onCardMouseOver={()=>{}}
        />
    );
    placeCard.find(`h2.place-card__name a`).simulate(`click`);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
    expect(onTitleClick.mock.calls[0][0]).toMatchObject(offer);
  });

  it(`should card on mouseover to call cb with card and offer`, () => {
    const offer = cityOffers[1];
    const onCardMouseOver = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          prefix={`cities`}
          offer={offer}
          onTitleClick={()=>{}}
          onCardMouseOver={onCardMouseOver}
        />
    );
    const card = placeCard.find(`article.place-card`);
    card.simulate(`mouseover`, {currentTarget: card});
    expect(onCardMouseOver).toHaveBeenCalledTimes(1);
    expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(card);
    expect(onCardMouseOver.mock.calls[0][1]).toMatchObject(offer);
  });
});
