import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, string, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducers/reducer';
import Page from '../page/page';
import Main from '../main/main';
import Property from '../property/property';
import {offers as initialOffers} from '../../mocks/offers';

class App extends PureComponent {
  componentDidMount() {
    const city = initialOffers[0].city.name;
    this.props.loadData(initialOffers);
    this.props.setData(city);
  }

  _renderApp() {
    const {offers, cities, activeCity, activeOffer, onTitleClick, onTabClick} = this.props;

    if (activeOffer) {
      return (
        <Page className="page--property">
          <Property
            offer={activeOffer}
            nearOffers={offers.slice(0, 3)}
            onTitleClick={onTitleClick}
          />
        </Page>
      );
    }

    return (
      <Page className="page--gray page--main">
        <Main
          offers={offers}
          cities={cities}
          activeCity={activeCity}
          onTitleClick={onTitleClick}
          onTabClick={onTabClick}
        />
      </Page>
    );
  }

  render() {
    const {offers, onTitleClick} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Page className="page--property">
              <Property
                offer={offers[0]}
                nearOffers={offers.slice(0, 3)}
                onTitleClick={onTitleClick}
              />
            </Page>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  cities: arrayOf(string).isRequired,
  activeCity: string.isRequired,
  activeOffer: offerPropTypes,
  onTitleClick: func.isRequired,
  onTabClick: func.isRequired,
  loadData: func.isRequired,
  setData: func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  cities: state.cities,
  activeCity: state.activeCity,
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  loadData(offers) {
    dispatch(ActionCreator.setInitialOffers(offers));
    dispatch(ActionCreator.setCities(offers));
  },
  setData(city) {
    dispatch(ActionCreator.setActiveCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
  onTitleClick(activeOffer) {
    dispatch(ActionCreator.setActiveOffer(activeOffer));
  },
  onTabClick(activeCity) {
    dispatch(ActionCreator.setActiveCity(activeCity));
    dispatch(ActionCreator.getOffers(activeCity));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
