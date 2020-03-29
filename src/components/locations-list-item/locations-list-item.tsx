import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ActionCreator as OffersActionCreator} from '../../reducers/offers/offers';
import {AppRoute} from '../../const';

interface Props {
  nodeType: `li` | `div`;
  city: string;
  isActive: boolean;
  onLocationsItemClick: () => void;
}

const LocationsListItem: React.FC<Props> = (props: Props) => {
  const {
    nodeType,
    city,
    isActive,
    onLocationsItemClick
  } = props;
  const activeClass = isActive ? `tabs__item--active` : ``;

  return nodeType === `li` ? (
    <li className="locations__item" key={city}>
      <a className={`locations__item-link tabs__item ${activeClass}`}
        onClick={onLocationsItemClick}
      >
        <span>{city}</span>
      </a>
    </li>
  ) : (
    <div className="locations__item" key={city}>
      <Link to={AppRoute.ROOT} className={`locations__item-link tabs__item ${activeClass}`}
        onClick={onLocationsItemClick}
      >
        <span>{city}</span>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  onLocationsItemClick({currentTarget}) {
    const city = currentTarget.text;
    if (props.isActive) {
      return;
    }
    dispatch(OffersActionCreator.setActiveCity(city));
  }
});

export {LocationsListItem};
export default connect(null, mapDispatchToProps)(LocationsListItem);
