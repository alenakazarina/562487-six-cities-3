import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {appOffers} from '../../mocks/tests';

const prefixes = [`cities`, `near-places`];

describe(`PlaceCard`, () => {
  it(`should render cities PlaceCard`, () => {
    const tree = renderer.create(
        <PlaceCard
          prefix={prefixes[0]}
          offer={appOffers[0].offers[0]}
          onTitleClick={()=>{}}
          onCardMouseOver={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render near places PlaceCard`, () => {
    const tree = renderer.create(
        <PlaceCard
          prefix={prefixes[1]}
          offer={appOffers[1].offers[1]}
          onTitleClick={()=>{}}
          onCardMouseOver={()=>{}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
