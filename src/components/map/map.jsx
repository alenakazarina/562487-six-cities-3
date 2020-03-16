import React, {PureComponent, createRef} from 'react';
import {string, arrayOf} from 'prop-types';
import {offerPropTypes} from '../../types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
    this._markers = [];
    this._location = {};
  }

  componentDidMount() {
    const {offers} = this.props;
    this._location = offers[0].city.location;
    this._zoom = this._location.zoom;


    this._map = leaflet.map(this._mapRef.current, {
      zoom: this._location.zoom,
      zoomControl: false,
      marker: true
    });

    this._addTileLayerOnMap();
    this._addMarkersOnMap();
    this._update();
  }

  componentDidUpdate() {
    this._update();
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _addTileLayerOnMap() {
    const tileLayer = {
      urlTemplate: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    };

    leaflet
      .tileLayer(tileLayer.urlTemplate, {
        attribution: tileLayer.attribution
      })
      .addTo(this._map);
  }

  _addMarkersOnMap() {
    const {offers, activeOffer} = this.props;
    offers.forEach((offer) => {
      const icon = this._getIcon(activeOffer && offer.id === activeOffer.id);

      const offerMarker = leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon})
        .addTo(this._map);

      this._markers = [...this._markers, offerMarker];
    });
  }

  _getIcon(isActive) {
    return isActive ?
      leaflet.icon({
        iconUrl: `../img/pin-active.svg`,
        iconSize: [27, 39]
      }) :
      leaflet.icon({
        iconUrl: `../img/pin.svg`,
        iconSize: [27, 39]
      });
  }

  _setMapView() {
    this._location = this.props.offers[0].city.location;
    this._zoom = this._location.zoom;
    this._map.setView([this._location.latitude, this._location.longitude], this._zoom);
  }

  _update() {
    const {prefix, offers, activeOffer} = this.props;
    this._setMapView();
    if (prefix === `property`) {
      this._markers.forEach((marker, i) => {
        marker.setLatLng([offers[i].location.latitude, offers[i].location.longitude]);
        marker.setIcon(this._getIcon(activeOffer && offers[i].id === activeOffer.id));
      });
    } else {
      this._markers.forEach((marker) => {
        marker.removeFrom(this._map);
      });
      this._markers = [];
      this._addMarkersOnMap();
    }
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
