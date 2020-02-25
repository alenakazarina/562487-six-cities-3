import React, {PureComponent, createRef} from 'react';
import {string, arrayOf} from 'prop-types';
import {offerPropTypes} from '../../types';
import leaflet from 'leaflet';
import {LOCATIONS, LOCATIONS_ZOOM} from '../../mocks/const';

const TileLayer = {
  urlTemplate: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
  }

  componentDidMount() {
    this._map = leaflet.map(this._mapRef.current, {
      zoom: LOCATIONS_ZOOM,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(TileLayer.urlTemplate, {
        attribution: TileLayer.attribution
      })
      .addTo(this._map);

    this._update();
  }

  componentDidUpdate() {
    this._update();
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _update() {
    const {offers, activeOffer} = this.props;
    const {location} = LOCATIONS.find((place) => place.name === offers[0].city.name);
    const cityCenter = [location.latitude, location.longitude];

    this._map.setView(cityCenter, LOCATIONS_ZOOM);

    offers.forEach((offer) => {
      const icon = activeOffer && offer.id === activeOffer.id ?
        leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [27, 39]
        }) :
        leaflet.icon({
          iconUrl: `img/pin.svg`,
          iconSize: [27, 39]
        });

      leaflet
        .marker([offer.city.location.latitude, offer.city.location.longitude], {icon})
        .addTo(this._map);
    });
  }

  render() {
    const {prefix} = this.props;
    return (
      <section ref={this._mapRef} className={`${prefix}__map map`} />
    );
  }
}

Map.propTypes = {
  prefix: string.isRequired,
  offers: arrayOf(offerPropTypes).isRequired,
  activeOffer: offerPropTypes
};

export default Map;
