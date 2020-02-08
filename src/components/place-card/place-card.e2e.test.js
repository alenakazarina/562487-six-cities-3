import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import {title} from '../../mock/tests';

configure({
  adapter: new Adapter(),
});

it(`should card title be pressed`, () => {
  const onTitleClick = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        title={title}
        onTitleClick={onTitleClick}
      />
  );
  const cardTitle = placeCard.find(`h2.place-card__name a`);
  cardTitle.props().onClick();
  expect(onTitleClick.mock.calls.length).toBe(1);
});
