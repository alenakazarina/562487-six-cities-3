import * as React from 'react';
import {OfferTypes, Location} from '../../types';
import * as leaflet from 'leaflet';

interface Props {
  prefix: string;
  offers: OfferTypes[];
  activeOffer: OfferTypes;
}

class Map extends React.PureComponent<Props> {
  props: Props;

  private _mapRef: React.RefObject<HTMLElement>;
  private _map: leaflet.map | null;
  private _markers: Array<leaflet.marker>;
  private _location: Location;

  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._map = null;
    this._markers = [];
    this._location = {
      latitude: 0,
      longitude: 0,
      zoom: 13
    };
  }

  componentDidMount() {
    const mapElement = this._mapRef.current;
    this._map = leaflet.map(mapElement, {
      zoomControl: false,
      attributionControl: false
    });
    this._addTileLayer();
    this._addMarkers();
    this._update();
  }

  componentDidUpdate() {
    this._update();
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _update() {
    const {prefix} = this.props;

    this._setMapView();

    if (prefix === `property`) {
      this._updateMarkers();
    } else {
      this._removeMarkers();
      this._addMarkers();
    }
  }

  _addTileLayer() {
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

  _addMarkers() {
    const {offers, activeOffer} = this.props;
    offers.forEach((offer) => {
      const icon = this._getIcon(activeOffer && offer.id === activeOffer.id);

      const offerMarker = leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon});

      offerMarker.addTo(this._map);

      this._markers = [...this._markers, offerMarker];
    });
  }

  _updateMarkers() {
    const {offers, activeOffer} = this.props;

    this._markers.forEach((marker, i) => {
      marker.setLatLng([offers[i].location.latitude, offers[i].location.longitude]);
      marker.setIcon(this._getIcon(activeOffer && offers[i].id === activeOffer.id));
    });
  }

  _removeMarkers() {
    this._markers.forEach((marker) => {
      marker.removeFrom(this._map);
    });
    this._markers = [];
  }

  _getIcon(isActive: boolean) {
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
    const {offers, activeOffer} = this.props;
    this._location = activeOffer ? activeOffer.city.location : offers[0].city.location;
    this._map.setView([this._location.latitude, this._location.longitude], this._location.zoom);
  }

  render() {
    const {prefix} = this.props;

    return (
      <section ref={this._mapRef} className={`${prefix}__map map`} />
    );
  }
}

export default Map;
