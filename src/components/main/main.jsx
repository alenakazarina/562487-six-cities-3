import React, {PureComponent, createRef} from 'react';
import {arrayOf, func} from 'prop-types';
import Tabs from '../tabs/tabs';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import {offerPropTypes} from '../../types';
import Map from '../map/map';

const ACTIVE_TAB = `Amsterdam`;

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ACTIVE_TAB
    };
    this._mapRef = createRef();
  }

  render() {
    const {offers, onTitleClick} = this.props;
    const {activeTab} = this.state;
    return (
      <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeTab={activeTab} />
        <div className="cities">
          <div className={`cities__places-container container ${offers.length === 0 ? `cities__places-container--empty` : ``}`}>
            {offers.length ?
              <>
                <Places
                  city={ACTIVE_TAB}
                  offers={offers}
                  onTitleClick={onTitleClick}
                />
                <div className="cities__right-section">
                  <Map prefix={`cities`} offers={offers} />
                </div>
              </>
              : <NoPlaces city={ACTIVE_TAB} />
            }
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  onTitleClick: func.isRequired
};

export default Main;
