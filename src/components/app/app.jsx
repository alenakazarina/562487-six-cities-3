import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, string, func} from 'prop-types';
import {offerPropTypes} from '../../types';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducers/reducer';
import Page from '../page/page';
import Main from '../main/main';
import Property from '../property/property';
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const LocationsListWrapped = withActiveItem(LocationsList, `locations-list`);

class App extends PureComponent {
  _renderApp() {
    const {
      offers,
      cities,
      pageOffer,
      activeCity,
      activeOffer,
      onTitleClick,
      onCardMouseEnter,
      onCardMouseLeave,
      onTabClick
    } = this.props;

    if (pageOffer) {
      return (
        <Page className="page--property">
          <Property
            pageOffer={pageOffer}
            activeOffer={activeOffer}
            nearOffers={offers.slice(0, 3)}
            onTitleClick={onTitleClick}
            onCardMouseEnter={onCardMouseEnter}
            onCardMouseLeave={onCardMouseLeave}
          />
        </Page>
      );
    }

    return (
      <Page className="page--gray page--main">
        <Main isEmpty={offers.length === 0}>
          <LocationsListWrapped
            cities={cities}
            activeCity={activeCity}
            onTabClick={onTabClick}
          />
          <Cities
            offers={offers}
            activeCity={activeCity}
            activeOffer={activeOffer}
            onTitleClick={onTitleClick}
            onCardMouseEnter={onCardMouseEnter}
            onCardMouseLeave={onCardMouseLeave}
          />
        </Main>
      </Page>
    );
  }

  render() {
    const {offers, activeOffer, onTitleClick, onCardMouseEnter, onCardMouseLeave} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Page className="page--property">
              <Property
                pageOffer={offers[0]}
                activeOffer={activeOffer}
                nearOffers={offers.slice(0, 3)}
                onTitleClick={onTitleClick}
                onCardMouseEnter={onCardMouseEnter}
                onCardMouseLeave={onCardMouseLeave}
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
  pageOffer: offerPropTypes,
  activeCity: string.isRequired,
  activeOffer: offerPropTypes,
  onTitleClick: func.isRequired,
  onCardMouseEnter: func.isRequired,
  onCardMouseLeave: func.isRequired,
  onTabClick: func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  cities: state.cities,
  pageOffer: state.pageOffer,
  activeCity: state.activeCity,
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(pageOffer) {
    dispatch(ActionCreator.setPageOffer(pageOffer));
  },
  onCardMouseEnter(activeOffer) {
    dispatch(ActionCreator.setActiveOffer(activeOffer));
  },
  onCardMouseLeave(activeOffer) {
    dispatch(ActionCreator.setActiveOffer(activeOffer));
  },
  onTabClick(activeCity) {
    dispatch(ActionCreator.setActiveCity(activeCity));
    dispatch(ActionCreator.getOffers(activeCity));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
