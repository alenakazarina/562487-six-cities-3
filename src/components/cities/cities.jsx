import React from 'react';
import {func, arrayOf, string} from 'prop-types';
import {offerPropTypes} from '../../types';
import Places from '../places/places';
import Map from '../map/map';
import NoPlaces from '../no-places/no-places';
import withSort from '../../hocs/with-sort/with-sort';
const PlacesWithSort = withSort(Places);

const Cities = (props) => {
  const {
    offers,
    activeCity,
    activeOffer,
    onTitleClick,
    onCardHoverChange
  } = props;

  return (
    <div className="cities">
      <div className={`cities__places-container container ${offers.length === 0 ? `cities__places-container--empty` : ``}`}>
        {offers.length === 0 ?
          <NoPlaces city={activeCity} /> :
          <PlacesWithSort
            offers={offers}
            onTitleClick={onTitleClick}
            onCardHoverChange={onCardHoverChange}
          />
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

Cities.propTypes = {
  offers: arrayOf(offerPropTypes).isRequired,
  activeCity: string.isRequired,
  activeOffer: offerPropTypes,
  onTitleClick: func.isRequired,
  onCardHoverChange: func.isRequired
};

export default React.memo(Cities);
