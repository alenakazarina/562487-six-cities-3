import * as React from 'react';
import {connect} from 'react-redux';
import {AppUser} from '../../types';
import {getActiveCity} from '../../reducers/offers/selectors';
import Header from '../../components/header/header';
import LocationsListItem from '../locations-list-item/locations-list-item';
import {WrapperStyles, StatusStyles, DescriptionStyles, CityStyles} from './styles';

interface Props {
  isAuth: boolean;
  user: AppUser;
  activeCity: string;
}

const NotFound: React.FC<Props> = (props: Props) => {
  const {
    isAuth,
    user,
    activeCity
  } = props;
  return (
    <div className="page page--gray page--not-found">
      <Header
        isAuth={isAuth}
        user={user}
      />
      <main className="page__not-found">
        <div className="not-found__status-wrapper" style={WrapperStyles}>
          <b className="not-found__status" style={StatusStyles}>Page Not Found</b>
          <p className="not-found__status-description"
            style={DescriptionStyles}
          >It happens! Let’s get you back on track.</p>
          <div style={CityStyles}>
            <LocationsListItem
              nodeType="div"
              city={activeCity}
              isActive
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state)
});

export {NotFound};
export default connect(mapStateToProps)(NotFound);
