import React, {PureComponent, createRef} from 'react';
import {arrayOf, string} from 'prop-types';
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
    this._map = null;
    this._mapRef = createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = LOCATIONS.find((location) => location.name === offers[0].city.name);
    const cityCenter = [city.location.latitude, city.location.longitude];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    this._map = leaflet.map(this._mapRef.current, {
      center: cityCenter,
      zoom: LOCATIONS_ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(cityCenter, LOCATIONS_ZOOM);

    leaflet
      .tileLayer(TileLayer.urlTemplate, {
        attribution: TileLayer.attribution
      })
      .addTo(this._map);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.city.location.latitude, offer.city.location.longitude], {icon})
        .addTo(this._map);
    });
  }

  componentWillUnmount() {
    this._map.remove();
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
  offers: arrayOf(offerPropTypes).isRequired
};

export default Map;
