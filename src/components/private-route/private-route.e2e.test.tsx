import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {configure, mount} from 'enzyme';
import PrivateRoute from './private-route';
import {STORE_WITH_AUTH, STORE_WITH_NO_AUTH} from '../../mocks/tests';
import {AppRoute} from '../../const';

configure({
  adapter: new Adapter(),
});

describe(`PrivateRoute`, () => {
  it(`should render PrivateRoute`, () => {
    const render = () => <div/>;
    const wrapper = mount(
        <Provider store={STORE_WITH_AUTH}>
          <BrowserRouter>
            <PrivateRoute
              isAuth
              exact
              path={AppRoute.FAVORITES}
              render={render}
            />
          </BrowserRouter>
        </Provider>
    );
    const renderInner = wrapper.find(Route).props().render();
    expect(renderInner).toMatchObject(<div/>);
  });

  it(`should redirect to login page`, () => {
    const render = () => true;
    const wrapper = mount(
        <Provider store={STORE_WITH_NO_AUTH}>
          <BrowserRouter>
            <PrivateRoute
              isAuth={false}
              exact
              path={AppRoute.FAVORITES}
              render={render}
            />
          </BrowserRouter>
        </Provider>
    );
    const renderInner = wrapper.find(Route).props().render({location: AppRoute.FAVORITES});
    expect(renderInner).toMatchObject(<Redirect to={{pathname: `/login`, state: {from: `/favorites`}}} />);
  });
});
