import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, string, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducers/reducer';
import Page from '../page/page';
import Main from '../main/main';
import Property from '../property/property';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

const MainWrapped = withActiveCard(Main);
const PropertyWrapped = withActiveCard(Property);

class App extends PureComponent {
  _renderApp() {
    const {
      offers,
      cities,
      activeCity,
      activeOffer,
      onTitleClick,
      onTabClick
    } = this.props;

    if (activeOffer) {
      return (
        <Page className="page--property">
          <PropertyWrapped
            offer={activeOffer}
            nearOffers={offers.slice(0, 3)}
            onTitleClick={onTitleClick}
          />
        </Page>
      );
    }

    return (
      <Page className="page--gray page--main">
        <MainWrapped
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
              <PropertyWrapped
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
  onTabClick: func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  cities: state.cities,
  activeCity: state.activeCity,
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
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
