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
          onCardMouseEnter={()=>{}}
        />
    );
    placeCard.find(`h2.place-card__name a`).simulate(`click`);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
    expect(onTitleClick.mock.calls[0][0]).toMatchObject(offer);
  });

  it(`should card on mouseenter to call cb with card and offer`, () => {
    const offer = cityOffers[1];
    const onCardMouseEnter = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          prefix={`cities`}
          offer={offer}
          onTitleClick={()=>{}}
          onCardMouseEnter={onCardMouseEnter}
        />
    );
    const card = placeCard.find(`article.place-card`);
    card.simulate(`mouseenter`, {currentTarget: card});
    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(card);
    expect(onCardMouseEnter.mock.calls[0][1]).toMatchObject(offer);
  });
});
