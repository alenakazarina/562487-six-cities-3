import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

const offers = [
  {
    id: `01`,
    previewImage: `image`,
    title: `title`,
    isFavorite: true,
    isPremium: false,
    rating: 2,
    type: `House`,
    price: 500
  },
  {
    id: `02`,
    previewImage: `image`,
    title: `title`,
    isFavorite: false,
    isPremium: true,
    rating: 5,
    type: `Hotel`,
    price: 1000
  }
];

configure({
  adapter: new Adapter(),
});

describe(`PlaceCard`, () => {
  it(`should card title be pressed`, () => {
    const onTitleClick = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          offer={offers[0]}
          onTitleClick={onTitleClick}
          onCardMouseOver={()=>{}}
        />
    );
    placeCard.find(`h2.place-card__name a`).simulate(`click`);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });

  it(`should card on mouseover to call cb with card and offer`, () => {
    const onCardMouseOver = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          offer={offers[1]}
          onTitleClick={()=>{}}
          onCardMouseOver={onCardMouseOver}
        />
    );
    const card = placeCard.find(`article.place-card`);
    card.simulate(`mouseover`, {currentTarget: card});
    expect(onCardMouseOver).toHaveBeenCalledTimes(1);
    expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(card);
    expect(onCardMouseOver.mock.calls[0][1]).toMatchObject(offers[1]);
  });
});


// Для компонента «Карточка предложения» напишите e2e-тест. Он будет проверять, что при наведении курсора на карточку предложения в обработчик попадает информация об объекте недвижимости.
