import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf} from 'prop-types';
import Page from '../page/page';
import Main from '../main/main';
import Property from '../property/property';
import {offerPropTypes} from '../../types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: `Amsterdam`,
      offer: null
    };
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(activeOffer) {
    this.setState(() => ({
      offer: activeOffer
    }));
  }

  _renderApp() {
    const {offer} = this.state;
    const {offers} = this.props;
    if (offer) {
      return (
        <Page className="page--property">
          <Property
            offer={offer}
            nearOffers={offers.slice(0, 3)}
            onTitleClick={this._handleTitleClick}
          />
        </Page>
      );
    }

    return (
      <Page className="page--gray page--main">
        <Main
          offers={offers}
          onTitleClick={this._handleTitleClick}
        />
      </Page>
    );
  }

  render() {
    const {offers} = this.props;
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
                onTitleClick={this._handleTitleClick}
              />
            </Page>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired
};

export default App;
