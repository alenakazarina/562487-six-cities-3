import * as React from 'react';
import {connect} from 'react-redux';
import {OfferTypes} from '../../types';
import {getOffersByCity} from '../../reducers/offers/selectors';
import {getActiveOffer} from '../../reducers/offer/selectors';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import Map from '../map/map';
import withSort from '../../hocs/with-sort/with-sort';

const PlacesWithSort = withSort(Places);

interface Props {
  offers: OfferTypes[];
  activeOffer: OfferTypes;
  activeCity: string;
}

const Cities: React.FC<Props> = (props: Props) => {
  const {offers, activeOffer, activeCity} = props;
  return (
    <div className="cities">
      <div className={`cities__places-container container ${offers.length === 0 ? `cities__places-container--empty` : ``}`}>
        {offers.length === 0 ?
          <NoPlaces city={activeCity} /> :
          <PlacesWithSort offers={offers} />
        }
        <div className="cities__right-section">
          {offers.length && <Map prefix={`cities`}
            offers={offers}
            activeOffer={activeOffer}
          />
          }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  activeOffer: getActiveOffer(state)
});

export {Cities};
export default connect(mapStateToProps)(Cities);

