import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

const offer = {
  id: `01`,
  previewImage: `image`,
  title: `title`,
  images: [`image`, `image`],
  isFavorite: true,
  isPremium: false,
  rating: 3,
  features: {
    type: `House`,
    bedrooms: 3,
    maxAdults: 6
  },
  price: 200,
  amenities: [`amenity`, `amenity`],
  host: {
    id: `01`,
    name: `James`,
    isPro: true,
    avatarUrl: `avatar`
  },
  description: `House description`,
  reviews: [{
    id: `01`,
    user: {
      id: `10`,
      name: `Bob`,
      isPro: false,
      avatarUrl: `avatar`
    },
    rating: 4,
    comment: `comment`,
    date: new Date(`2019-04-24`)
  }],
  city: {
    name: `Hamburg`,
    location: {
      latitude: 53.552645,
      longitude: 9.966287,
      zoom: 13
    }
  }
};

configure({
  adapter: new Adapter(),
});

describe(`PlaceCard`, () => {
  it(`should card title be pressed`, () => {
    const onTitleClick = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          prefix={`cities__`}
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
    const onCardMouseOver = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          prefix={`cities__`}
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
