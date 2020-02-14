import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, shape, string} from 'prop-types';
import Main from '../main/main';
import Property from '../property/property';
import {offerPropTypes} from '../../types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
        <Property
          offer={offer}
          nearOffers={offers[0].offers.slice(0, 3)}
          onTitleClick={this._handleTitleClick}
        />
      );
    }

    return (
      <Main
        city={offers[0].city}
        offers={offers[0].offers}
        onTitleClick={this._handleTitleClick}
      />
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
            <Property
              offer={offers[0].offers[0]}
              nearOffers={offers[0].offers.slice(0, 3)}
              onTitleClick={this._handleTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: arrayOf(shape({
    city: string.isRequired,
    offers: arrayOf(offerPropTypes).isRequired
  })).isRequired
};

export default App;
